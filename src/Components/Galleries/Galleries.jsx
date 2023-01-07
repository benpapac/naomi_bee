import { forwardRef, useContext, useEffect, useState} from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';

import '../../Animations/animation.gallery.css'


import Gallery from './Gallery';

import GalleryStyles from '../../Stylesheets/GalleryStyles';

import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import Context from '../../Utils/context.js';



const Galleries = forwardRef((props, ref) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const [keys, setKeys] = useState({});
    const { prefix, setPrefix } = useContext(Context);
    const [centerImage, setCenterImage] = useState('');
    const [centerAnimation, setCenterAnimation] = useState('');
    const [centerViewAnimation, setCenterViewAnimation] = useState('');
    const [galleryAnimation, setGalleryAnimation] = useState('');

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

    const handlePress = (newPrefix) => {
        setCenterViewAnimation('gallerysqueeze 2s infinite alternate');
        setGalleryAnimation('galleryslidedown 1.5s infinite alternate');

        setTimeout(() => {
            setPrefix(newPrefix);
        }, 700);
        
        setTimeout(() => {
            setGalleryAnimation('galleryslideup 1.5s');
        }, 1500);

        setTimeout(()=> {
            setCenterViewAnimation('');
        }, 2000);


    }

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
		
                <Pressable onPress={()=>handlePress('muertos/')} style={GalleryStyles.button}> 
                   <Text>Dia de Los Muertos</Text>
                    </Pressable>
                <Pressable onPress={()=>handlePress('birthdays/')} style={GalleryStyles.button}>
                        <Text>Birthdays</Text>
                </Pressable>
                <Pressable onPress={()=>handlePress('adults/')} style={GalleryStyles.button}>
                        <Text>Adults too!</Text>
                </Pressable>
            </View>
        

        <View style={{...GalleryStyles.centerImageView, animation: centerViewAnimation}}>
            <Image source={centerImage} style={{...GalleryStyles.centerImage, animation: centerAnimation}} />
        </View>

            <Gallery keys={keys[prefix]} 
            setCenterImage={setCenterImage} 
            setCenterAnimation={setCenterAnimation}
            galleryAnimation={galleryAnimation}
            /> 

        </View>
        </>
    )
});

export default Galleries;