import React, { useContext, useEffect, useState, useRef } from "react";
import { View, Pressable, Image, Text } from 'react-native-web';
import GalleryStyles from "../../Stylesheets/GalleryStyles";

import '../../Animations/animation.gallery.css';
import NavStyles from "../../Stylesheets/NavStyles";
import Context from '../../Utils/context';
import ImageStyles from "../../Stylesheets/ImageStyles";


const Gallery = ({ imageKeys, galleryAnimation }) => {
    const {setTransform, setActiveUser} = useContext(Context);
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const [styles, setStyles] = useState({});


    const imagesRef = useRef(null);

    const getMap = () => {
        if(!imagesRef.current) {
            imagesRef.current = new Map();
        }
         return imagesRef.current;
    }


   const expandByIdx = (idx) => {
       const map = getMap();
       const node = map.get(idx);
        // node.style.animation = 'galleryexpand 0.5s';
        node.style['scale'] = 1.25;
        node.style['z-index'] = 1;

        let newStyles = {...styles};

        newStyles[idx] = 'expanded';
        console.log(newStyles[idx]);
        setStyles(newStyles);
   }

   const shrinkByIdx = (idx) => {
        const map = getMap();
        const node = map.get(idx);

        // node.style.animation = 'galleryshrink 0.5s';
        node.style['scale'] = 1;
        node.style['z-index'] = 0;


        let newStyles = {...styles};
        newStyles[idx] = 'shrunk';
        setStyles(newStyles);
   }


   const handlePressOut = async (idx) => {
        setTransform( 100 / imageKeys.length * idx );
        setActiveUser(true);
   } 

//    try connecting the ref's style to a css file.

useEffect(()=>{
   console.log(imageKeys);
},[]);

   if(!imageKeys) {
       return (
        <View style={{...GalleryStyles.gallery, animation: galleryAnimation}} className="gallery">
        </View>
    )
   }

    return (
        <View style={{...GalleryStyles.gallery, animation: galleryAnimation}} className="gallery">
            {imageKeys.map((key, idx) => {
                return (
                        <Pressable 
                            style={ GalleryStyles.pressable }
                            onPressOut={()=>handlePressOut(idx)}
                           
                            onMouseEnter={()=> expandByIdx(idx)}
                            onMouseLeave={() => shrinkByIdx(idx)}
                            ref={(node) => {
                                const map = getMap();
                                if (node) {
                                map.set(idx, node);
                                } else {
                                map.delete(idx);
                                }
                            }}
                            key={idx}
                        >

                            <Image  
                            source={{ uri:  `${BEE_URL}${key}`}} 
                            style={GalleryStyles.basicImage}
                            />
                            
                        </Pressable>
                )
            })}
        </View>
    )
}

export default Gallery;