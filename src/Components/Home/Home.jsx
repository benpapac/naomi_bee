import { forwardRef, useEffect, useState } from 'react';
import { View, Pressable, Image } from 'react-native-web';
import { useNavigate } from 'react-router-dom';

import HomeGallery from './HomeGallery';
import Slides from './HomeSlides';
import HomeRotator from './HomeRotator';
import getAllKeys from '../../Utils/s3';

import HomeStyles from '../../Stylesheets/HomeStyles';
import '../../Animations/animation.home.css';


const Home = forwardRef((props, ref) => {
    let navigate = useNavigate();
       const [prefix, setPrefix] = useState('nav');
    const [keys, setKeys] = useState(null);


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
            <View style={HomeStyles.doubleBox}></View>
            <View style={HomeStyles.tallBox}></View>
            <View style={HomeStyles.skinnyBox}></View>
        </View>

        <View style={HomeStyles.wideColumn}> 
            <Slides />
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