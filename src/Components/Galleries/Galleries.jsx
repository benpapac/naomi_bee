import { forwardRef, useContext, useEffect, useState} from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';

import '../../Animations/animation.gallery.css'


import Gallery from './Gallery';
import Slides from './Slides';

import GalleryStyles from '../../Stylesheets/GalleryStyles';

import Context from '../../Utils/context.js';

import getAllKeys from '../../Utils/s3';




const Galleries = forwardRef((props, ref) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const { prefix, setPrefix, setTransform } = useContext(Context);
    const [centerImage, setCenterImage] = useState('');
    const [centerAnimation, setCenterAnimation] = useState('');
    const [centerViewAnimation, setCenterViewAnimation] = useState('');
    const [galleryAnimation, setGalleryAnimation] = useState('');
    const [keys, setKeys] = useState({});

 

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

     useEffect(()=>{
        if(!keys[prefix]){
            getAllKeys(prefix, keys, setKeys);
            setTransform(0);
        } else {
            setTransform(0);
        }
    },[prefix]);

    return (
        <View ref={ref} style={GalleryStyles.container}>

            <View style={GalleryStyles.buttonsContainer}>
                <Pressable onPress={()=>handlePress('muertos')} style={GalleryStyles.button}> 
                    <Text>Dia de Los Muertos</Text>
                    </Pressable>
                <Pressable onPress={()=>handlePress('birthdays')} style={GalleryStyles.button}>
                    <Text>Birthdays</Text>
                </Pressable>
                <Pressable onPress={()=>handlePress('adults')} style={GalleryStyles.button}>
                    <Text>Adults too!</Text>
                </Pressable>
            </View>


            <Slides imageKeys={keys[prefix]} />
            <Gallery imageKeys={keys[prefix]}/>

        </View>
        

 
    )
});

export default Galleries;