import { forwardRef, useEffect, useState } from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';
import { useNavigate } from 'react-router-dom';

import HomeGallery from './HomeGallery';
import HomeRotator from './HomeRotator';
import getAllKeys from '../../Utils/s3';

import HomeStyles from '../../Stylesheets/HomeStyles';
import '../../Animations/animation.home.css';


const Home = forwardRef((props, ref) => {
    let navigate = useNavigate();
       const [prefix, setPrefix] = useState('nav');
    const [keys, setKeys] = useState(null);
    const [overlays, setOverlays] = useState({
        about: 'hiddenOverlay',
        gallery: 'hiddenOverlay',
    });

    const handlePress = (key) => {
        console.log('pressed')
        setOverlays({
            ...overlays,
            [key]: 'overlay'
        })
    };


   useEffect(()=>{
    console.log('sending with ', prefix)
    if(prefix){
        if(keys && keys[prefix]){
            console.log('already gotten!')
             return;
        } else {
            console.log('getting keys...');
            getAllKeys(prefix, keys, setKeys);
        }
    }
   },[prefix]);


    return (
        <View style={HomeStyles.container}>

        <View style={HomeStyles.column}>
            <View style={HomeStyles.box} ></View>
            {keys ? <HomeGallery keys={keys[prefix]} />  : <h1>Loading...</h1> }  
            <View style={HomeStyles.box}></View>
        </View>

        <View style={HomeStyles.doubleColumn}>
            <Pressable onPress={()=> handlePress('about')} style={HomeStyles.doubleBox}>
            <Text style={HomeStyles[overlays.about]}>Read more</Text>
                <Text style={HomeStyles.p}>
                    <Text style={HomeStyles.title}>Hello from Section 1</Text>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                </Text>
            </Pressable>
            <View style={HomeStyles.tallBox}></View>
            <View style={HomeStyles.skinnyBox}></View>
        </View>

        <View style={HomeStyles.wideColumn}> 
            <View style={HomeStyles.box}></View>
            <Pressable onPress={()=> navigate('/faq')} style={HomeStyles.pressable}>
            <Image source={process.env.REACT_APP_FAQ} style={HomeStyles.basicImage}></Image>
            </Pressable>

        </View>

        <View style={HomeStyles.column}> 
            <View style={HomeStyles.box}></View>
            <Pressable onPress={()=> navigate('/booking')} style={HomeStyles.pressable}>
                <Image source={process.env.REACT_APP_BOOKING} style={HomeStyles.basicImage}></Image>
            </Pressable>
                <HomeRotator />
        </View>

        </View>
    );
});

export default Home;