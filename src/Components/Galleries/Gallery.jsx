import React, { useContext, useState, useRef } from "react";
import { View, Pressable, Image } from 'react-native-web';
import GalleryStyles from "../../Stylesheets/GalleryStyles";

import '../../Animations/animation.gallery.css';
import NavStyles from "../../Stylesheets/NavStyles";
import Context from '../../Utils/context';
import ImageStyles from "../../Stylesheets/ImageStyles";


const Gallery = ({ keys, setCenterImage, setCenterAnimation, galleryAnimation }) => {
    const context = useContext(Context);
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const [styles, setStyles] = useState({});
       const refIds = ['about', 'faq','booking'];
       const prefixes = ['muertos', 'adults', 'birthdays'];


    const imagesRef = useRef(null);

    const getMap = () => {
        if(!imagesRef.current) {
            imagesRef.current = new Map();
        }
         return imagesRef.current;
    }

    const getPrefix = (key) => {
        for(let i = 0; i < prefixes.length; i++){
            if(key.includes(prefixes[i])){
                return (prefixes[i]);
            }
        }
        return '';
    }

    const getRefId = (key) => {
         for(let i = 0; i < refIds.length; i++){
            if(key.includes(refIds[i])){
                return (refIds[i]+'Ref');
            }
        }
        return '';
    }


   const expandByIdx = (idx) => {
       const map = getMap();
       const node = map.get(idx);
        node.style.animation = 'galleryexpand 0.5s';
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

        node.style.animation = 'galleryshrink 0.5s';
        node.style['scale'] = 1;
        node.style['z-index'] = 0;


        let newStyles = {...styles};
        newStyles[idx] = 'shrunk';
        setStyles(newStyles);
   }


   const handlePressOut = async (key) => {
        setCenterAnimation('galleryslideout 2s');
       setTimeout(()=>{
        setCenterImage(BEE_URL+key);
        setCenterAnimation('galleryslidein 2s');
       },600);
   } 

//    try connecting the ref's style to a css file.

   if(!keys) {
       return (
        <View style={{...GalleryStyles.gallery, animation: galleryAnimation}} className="gallery">
        </View>
    )
   }

    return (
        <View style={{...GalleryStyles.gallery, animation: galleryAnimation}} className="gallery">
            {keys.map((key, idx) => {
                return (
                        <Pressable 
                            style={ GalleryStyles.pressable }
                            onPressOut={()=>handlePressOut(key)}
                           
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
                            style={ImageStyles.basicImage}
                            />
                            
                        </Pressable>
                )
            })}
        </View>
    )
}

export default Gallery;