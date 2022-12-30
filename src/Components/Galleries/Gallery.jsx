import React, { useContext, useState, useRef } from "react";
import { View, Pressable, Image } from 'react-native-web';
import GalleryStyles from "../../Stylesheets/GalleryStyles";

import '../../Stylesheets/animation-styles.css';
import NavStyles from "../../Stylesheets/NavStyles";
import Context from '../../Utils/context';
import ImageStyles from "../../Stylesheets/ImageStyles";


const Gallery = ({ keys, setCenterImage }) => {
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
        node.style.animation = 'expand 0.5s';
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

        node.style.animation = 'shrink 0.5s';
        node.style['scale'] = 1;
        node.style['z-index'] = 0;


        let newStyles = {...styles};
        newStyles[idx] = 'shrunk';
        setStyles(newStyles);
   }

   const handleClick = (key) => {
    setCenterImage(BEE_URL+key)
   }

//    const handleClick= (idx) => {
//         let oldUri = centerUri;
//         setCenterUri(uris[idx]);

//         //next, let's grab our midpoint.
//         let midpoint = Math.floor(uris.length/2);

//         //now, the distance from the chosend index to the midoint is what we need.
//         let distance = idx - midpoint;

//         let newArray = uris;
//         newArray.splice(idx, 1, oldUri);

//         //using the distance, I can rotate my array.


//         //what if the idx = 0?

//         //what if the idx is < midpoint?

//         // midpoint =2. 
//         // idx = 1.
//         // I want to move every index one to the right.

        
//         if(idx < midpoint){
//             newArray = uris.slice(-distance).concat( uris.slice(0, idx+1) ).concat( uris.slice(idx+1, -distance) );
//         } else {
//             //what if the idx is arr.length-1?
//             //what if the idx is > midpoint?
//             newArray = uris.slice( 0+distance, idx+1 ).concat( uris.slice(idx+1) ).concat( uris.slice(0, distance) );
//         }

//         setUris(newArray);
//         setClicked(true);

//         //now, I want my uris Array to center itself around the centerUri.
       
//     }


//    try connecting the ref's style to a css file.

    return (
        <View style={GalleryStyles.gallery} className="gallery">
            {keys.map((key, idx) => {
                return (
                        <Pressable 
                            style={ GalleryStyles.pressable }
                            // onPress={() => toggleById(idx)}
                            // onPressIn={() => getPrefix(key) && setPrefix(getPrefix(key))}
                            onPressOut={()=>handleClick(key)}
                            // onPressOut={() => getRefId(key) &&  context[getRefId(key)].current.scrollIntoView({behavior: 'smooth', block: 'center'})}
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