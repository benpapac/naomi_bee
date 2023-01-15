import { forwardRef, useContext, useEffect, useState} from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';

import '../../Animations/animation.gallery.css'


import Gallery from './Gallery';
import Slides from './Slides';
import Buttons from './Buttons';

import GalleryStyles from '../../Stylesheets/GalleryStyles';

import Context from '../../Utils/context.js';

import getAllKeys from '../../Utils/s3';




const Galleries = forwardRef((props, ref) => {
    // const BEE_URL = process.env.REACT_APP_BEE_URL;
    const { prefix, setTransform } = useContext(Context);
    // const [centerImage, setCenterImage] = useState('');
    // const [centerAnimation, setCenterAnimation] = useState('');
    // const [centerViewAnimation, setCenterViewAnimation] = useState('');
    // const [galleryAnimation, setGalleryAnimation] = useState('');
    const [keys, setKeys] = useState({});



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
            <Buttons />
            <Slides imageKeys={keys[prefix]} />
            <Gallery imageKeys={keys[prefix]}/>
        </View>
    )
});

export default Galleries;