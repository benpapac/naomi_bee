import React from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';
import { useNavigate } from 'react-router-dom';

import HomeStyles from '../../Stylesheets/HomeStyles';
import ImageStyles from '../../Stylesheets/ImageStyles';

const HomeGallery = ({ keys }) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const navigate = useNavigate();

    const links = ['about', 'faq', 'booking'];


    const handlePress = (key) => {
         for(let i = 0; i < links.length; i++){
            if(key.includes(links[i])){
                navigate('/'+links[i]);
            }
        }
        return '/';
    }

    return (
        <View style={HomeStyles.gallery}>
       { keys.map( (key, idx) => {
           return (
               <Pressable 
               style={ HomeStyles.pressable }
               onPress={handlePress}
               key={idx}
               >
                    <Image  
                    source={{ uri:  `${BEE_URL}${key}`}} 
                    style={HomeStyles.basicImage}
                    />
                            
                </Pressable>
            )})
       }
       </View>)
};

export default HomeGallery;