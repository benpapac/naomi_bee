import { forwardRef, useContext, useEffect, useState } from 'react';
import { View, Pressable, Image, Text } from 'react-native-web';
import { useNavigate } from 'react-router-dom';

import HomeGallery from './HomeGallery';
import HomeStyles from '../../Stylesheets/NavStyles';
import ImageStyles from '../../Stylesheets/ImageStyles';
import getAllKeys from '../../Utils/s3';

const Home = forwardRef((props, ref) => {
    let navigate = useNavigate();
       const [prefix, setPrefix] = useState('nav');
       const links = ['about', 'faq', 'booking'];
         const styles = ['smallRight', 'smallLeft', 'tallRight', 'tallLeft','shortRight','shortLeft'];
    const [clicked, setClicked] = useState(false);
    const [keys, setKeys] = useState(null);


    const [uris, setUris] = useState([
        process.env.REACT_APP_HAMBURGER,
        process.env.REACT_APP_BEE_URL + process.env.REACT_APP_BUTTERFLY,
        process.env.REACT_APP_BEE_URL + process.env.REACT_APP_KID
    ]);


    const handlePress = (key) => {
         for(let i = 0; i < links.length; i++){
            if(key.includes(links[i])){
                return ('/'+links[i]);
            }
        }
        return '/';
    }

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
            {keys ? <HomeGallery keys={keys[prefix]} />  : <h1>Loading...</h1> } 
        </View>
    );
});

export default Home;