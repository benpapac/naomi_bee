import { forwardRef, useContext, useEffect, useState} from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';


import Gallery from './Gallery';

import GalleryStyles from '../../Stylesheets/GalleryStyles';

import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import Context from '../../Utils/context.js';
import ImageStyles from '../../Stylesheets/ImageStyles';


const Galleries = forwardRef((props, ref) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const [keys, setKeys] = useState({});
    const { prefix, setPrefix } = useContext(Context);
    const [centerImage, setCenterImage] = useState('');

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
            setCenterImage(BEE_URL+array[Math.floor(array.length/2)]);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(()=>{

        if(!centerImage){
            setCenterImage(BEE_URL+process.env.REACT_APP_KID);
        }
    if(prefix){
        if(keys[prefix]){
            console.log('already gotten!')
            setCenterImage(BEE_URL+keys[prefix][Math.floor(keys[prefix].length/2)]);
             return;
        } else {
            console.log('getting keys...');
            getAllKeys();
        }
    }
    },[prefix]);

    return (
        <>
        <View ref={ref} style={GalleryStyles.container}>
            <View style={GalleryStyles.buttonsContainer}>
		
                <Pressable onPress={()=> setPrefix('muertos/')} style={GalleryStyles.button}> 
                    Dia de Los Muertos
                    </Pressable>
                <Pressable onPress={()=> setPrefix('birthdays/')} style={GalleryStyles.button}>
                        Birthdays
                </Pressable>
                <Pressable onPress={()=> setPrefix('adults/')} style={GalleryStyles.button}>
                        Adults too!
                </Pressable>
            </View>
        

        <View style={GalleryStyles.centerImageView}>
            <Image source={centerImage} style={GalleryStyles.centerImage} />
        </View>

            {keys[prefix] ? <Gallery keys={keys[prefix]} setCenterImage={setCenterImage} /> : null}

        </View>
        </>
    )
});

export default Galleries;