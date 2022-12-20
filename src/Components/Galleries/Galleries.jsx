import { forwardRef, useContext, useEffect, useState} from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';


import Gallery from './Gallery';
import NavReturn from '../Nav/NavReturn';
import GalleryStyles from '../../Stylesheets/GalleryStyles';

import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import Context from '../../Utils/context.js';


const Galleries = forwardRef((props, ref) => {
    const [keys, setKeys] = useState({});
    const { prefix, setPrefix } = useContext(Context);

    const REGION = process.env.REACT_APP_REGION;
    const ID = process.env.REACT_APP_AWS_CRED;
    const BUCKET = process.env.REACT_APP_BUCKET;
    const s3 = new S3Client({
        region: REGION,
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region: REGION }),
            identityPoolId: ID,
        }),
    });

    const getAllKeys = async() => {
            try {
            const data = await s3.send(
                new ListObjectsCommand({ Delimiter: '/', Prefix: prefix, Bucket: BUCKET, Region: REGION })
            );
            let array = data.Contents.reduce((accum, image) => {
                return [...accum, image.Key];
            },[]);
            setKeys({...keys, [prefix]: array.slice(1)});
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(()=>{
    if(prefix){
        if(keys[prefix]){
            console.log('already gotten!')
             return;
        } else {
            console.log('getting keys...');
            getAllKeys();
        }
    }
    },[prefix]);

    return (
        <View ref={ref} style={GalleryStyles.container}>

            <View style={GalleryStyles.buttonsContainer}>
		
                <Pressable onPress={()=> setPrefix('muertos/')} > 
                    <Text>
                    Dia de Los Muertos
                    </Text>
                    </Pressable>
                <Pressable onPress={()=> setPrefix('birthdays/')} >
                    <Text>
                        Birthdays
                    </Text>
                </Pressable>
                <Pressable onPress={()=> setPrefix('adults/')} >
                    <Text>
                        Adults too!
                    </Text>
                </Pressable>
            </View>

            <View style={GalleryStyles.gallery}>
                {keys[prefix] ? <Gallery keys={keys[prefix]}/> : null}
            </View>

        </View>
    )
});

export default Galleries;