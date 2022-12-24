import { useContext, useEffect, useState } from 'react';
import { View, Pressable, Image } from 'react-native-web';
import NavStyles from '../../Stylesheets/NavStyles';

import NavImage from './NavImage';

import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';

const TestNav = () => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
      const REGION = process.env.REACT_APP_REGION;
    const ID = process.env.REACT_APP_AWS_CRED;
    const BUCKET = process.env.REACT_APP_BUCKET;
       const prefixes = ['muertos', 'adults','birthdays'];
       const refIds = ['about', 'faq', 'booking'];


    const s3 = new S3Client({
        region: REGION,
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region: REGION }),
            identityPoolId: ID,
        }),
    });

    const [keys, setKeys ] = useState(null);

    const getPrefix = (key) => {
        for(let i = 0; i < prefixes.length; i++){
            if(key.includes(prefixes[i])){
                return (prefixes[i]);
            }
        }
        return '';
    }

    const getRefId= (key) => {
        if(getPrefix(key)){
            return 'galleriesRef';
        } else {
            for(let i = 0; i < refIds.length; i++){
               if(key.includes(refIds[i])){
                   return (refIds[i]+'Ref');
               }
           }
        }

        return '';
    }
    
    const getAllKeys = async() => {
            try {
            const data = await s3.send(
                new ListObjectsCommand({ Delimiter: '/', Prefix: 'nav/', Bucket: BUCKET, Region: REGION })
            );
            let array = data.Contents.reduce((accum, image) => {
                return [...accum, image.Key];
            },[]);
            setKeys(array.slice(1));
        } catch (error) {
            console.error(error);
        }
    }

   useEffect(()=>{
    getAllKeys();
   },[]);


    return (
        <View style={NavStyles.container}>
            < View style={NavStyles.gallery}>

                {keys ? keys.map((key, idx) => {
                        return (
                            <NavImage uri={`${BEE_URL}${key}`} prefix={getPrefix(key)} refId={getRefId(key)} />
                        )
                    }): null}
            </View>
        </View>
    );
};

export default TestNav;