import React, { useEffect, useState, useRef } from "react";
import { View, Pressable, Image } from 'react-native-web';
import GalleryStyles from "../../Stylesheets/GalleryStyles";

import '../../Stylesheets/ImageStyles.css';


const Gallery = ({ keys }) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const [imageStyles, setImageStyles] = useState({});

    const imagesRef = useRef(null);

    const getMap = () => {
        if(!imagesRef.current) {
            imagesRef.current = new Map();
        }
         return imagesRef.current;
    }

    const featureById = (idx) => {
        const map = getMap();
       const node = map.get(idx);
        node.style.animation = 'feature 2s';
        node.style['flex-grow'] = 15;

        let newStyles = {...imageStyles};
        newStyles[idx] = 'featured';
        setImageStyles(newStyles);

    }

    const unfeatureById = (idx) => {
         const map = getMap();
       const node = map.get(idx);
        node.style.animation = 'unfeature 2s';
        node.style['flex-grow'] = 1;

        let newStyles = {...imageStyles};
        newStyles[idx] = 'shrunk';
        setImageStyles(newStyles);
    }

    const toggleById = (idx) => {
        console.log('toggling...');
        if(imageStyles[idx] === 'expanded'){
            shrinkById(idx); //side effects
        } else if(imageStyles[idx] === 'featured'){
            unfeatureById(idx);
        } else if(imageStyles[idx] === 'shrunk'){
            expandById(idx); //side effects
        }
        return imageStyles[idx];
    }

   const expandById = (idx) => {
       const map = getMap();
       const node = map.get(idx);
        node.style.animation = 'expand 2s';
        node.style['flex-grow'] = 2.5;

        let newStyles = {...imageStyles};

        newStyles[idx] = 'expanded';
        console.log(newStyles[idx]);
        setImageStyles(newStyles);
   }

   const shrinkById = (idx) => {
        const map = getMap();
        const node = map.get(idx);

        node.style.animation = 'shrink 0.5s';
        node.style['flex-grow'] = 1;

        let newStyles = {...imageStyles};
        newStyles[idx] = 'shrunk';
        setImageStyles(newStyles);
   }


//    try connecting the ref's style to a css file.

    return (
        <>
            {keys.map((key, idx) => {
                return (
                        <Pressable 
                            style={ {height: '80vh', minWidth: '3vw', flexGrow: '1', margin: '3vh 0'} }
                            onPress={() => featureById(idx)}
                            onMouseLeave={() => toggleById(idx)}
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
                            style={{ height: '100%', width: '100%', objectFit: 'cover', verticalAlign: 'bottom'}}
                            />
                            
                        </Pressable>
                )
            })}
        </>
    )
}

export default Gallery;