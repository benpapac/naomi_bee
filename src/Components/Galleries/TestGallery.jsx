import { useEffect, useState } from 'react';

import { View, Pressable, Image, Text } from 'react-native-web';
import GalleryStyles from '../../Stylesheets/GalleryStyles';
import ImageStyles from '../../Stylesheets/ImageStyles';


const TestGallery = () => {
    const styles = ['smallRight', 'smallLeft', 'tallRight', 'tallLeft','shortRight','shortLeft'];
    const [clicked, setClicked] = useState(false);

    const [uris, setUris] = useState([
        process.env.REACT_APP_HAMBURGER,
        process.env.REACT_APP_HOME,
        process.env.REACT_APP_FAQ,
        process.env.REACT_APP_BOOKING,
        process.env.REACT_APP_BEE_URL + process.env.REACT_APP_BUTTERFLY,
        process.env.REACT_APP_BEE_URL + process.env.REACT_APP_KID
    ]);

    
    const [centerUri, setCenterUri] = useState(process.env.REACT_APP_BEE_URL + process.env.REACT_APP_SKULL);

    
    const handleClick= (idx) => {
        if(clicked) return clicked;
        console.log('clicked');
        let oldUri = centerUri;
        setCenterUri(uris[idx]);

        //next, let's grab our midpoint.
        let midpoint = Math.floor(uris.length/2);

        //now, the distance from the chosend index to the midoint is what we need.
        let distance = idx - midpoint;

        let newArray = uris;
        newArray.splice(idx, 1, oldUri);

        //using the distance, I can rotate my array.


        //what if the idx = 0?

        //what if the idx is < midpoint?

        // midpoint =2. 
        // idx = 1.
        // I want to move every index one to the right.

        
        if(idx < midpoint){
            newArray = uris.slice(-distance).concat( uris.slice(0, idx+1) ).concat( uris.slice(idx+1, -distance) );
        } else {
            //what if the idx is arr.length-1?
            //what if the idx is > midpoint?
            newArray = uris.slice( 0+distance, idx+1 ).concat( uris.slice(idx+1) ).concat( uris.slice(0, distance) );
        }

        setUris(newArray);
        setClicked(true);

        //now, I want my uris Array to center itself around the centerUri.
       
    }


    useEffect(()=>{
        if(clicked){
            setTimeout(()=>setClicked(!clicked), 1500);
        }
    },[clicked]);


    /*
    I want to render a group of Pressables. Each view will hold an Image, with a dynamic uri.
    Every time I click on a Pressable, I want to send the uri from that Pressable to the one called centerImage.

    */
    return (
        <View style={{width: '100vw', height: '100vh'}}>

            <Pressable style={ImageStyles.centerImage} >
                <Image source={{uri: centerUri}}style={{width: '100%', height: '100%'}}/>
            </Pressable>

       {styles ?  styles.map((item, idx) => {
            return (
                <Pressable 
                key={item}
                onPressOut={()=>handleClick(idx)}
                style={ImageStyles[item]}>
                    <Image source={{uri: uris[idx]}} style={{height: '100%', width: '100%'}} />
                </Pressable>
            )
        }) : null
    }
        </View>
    );
};

export default TestGallery;