import React, { useEffect, useState, useRef } from "react";
import { Animated, View, Pressable, Image } from 'react-native-web';
import GalleryStyles from "../../Stylesheets/GalleryStyles";

import '../../Stylesheets/ImageStyles.css';


const Gallery = ({ keys }) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const [imageStyles, setImageStyles] = useState({});

    const expAnim = useRef( new Animated.Value(1)).current;
    const shrinkAnim = useRef( new Animated.Value(5)).current;



    const imagesRef = useRef(null);


    const getMap = () => {
        if(!imagesRef.current) {
            imagesRef.current = new Map();
        }
         return imagesRef.current;
    }
  

   const expandById = (id) => {
       const map = getMap();
       const node = map.get(id);
        node.style.animation = 'expand 2s';
        node.style['flex-grow'] = 2.5;

        let newStyles = imageStyles.map(style => style);
        newStyles[id] = 'expanded';
        setImageStyles(newStyles);
   }

   const shrinkById = (id) => {
        const map = getMap();
        const node = map.get(id);

        node.style.animation = 'shrink 0.5s';
        node.style['flex-grow'] = 1;

        let newStyles = imageStyles.map(style => style);
        newStyles[id] = 'shrunk';
        setImageStyles(newStyles);
   }


//    try connecting the ref's style to a css file.

    return (
        <View style={GalleryStyles.gallery}>
            {keys.map((key, idx) => {
                return (
                        <Pressable style={ {height: '16vw', minWidth: '3vw', flexGrow: '1', margin: '3vh 0'} }
                        onPress={() => expandById(idx)}
                            onMouseLeave={() => shrinkById(idx)}
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
                            <Image  source={{ uri:  `${BEE_URL}${key}`}} 
                            
                            style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover', verticalAlign: 'bottom'}}

                            >
                            </Image>
                        </Pressable>
                )
            })}
        </View>
    )
}

export default Gallery;