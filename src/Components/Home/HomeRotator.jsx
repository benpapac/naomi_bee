import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native-web';
import HomeStyles from '../../Stylesheets/HomeStyles';


const HomeRotator = () => {

    const keys = [process.env.REACT_APP_BUTTERFLY, process.env.REACT_APP_KID, process.env.REACT_APP_NAOMI_AND_KID];
    const [transforms, setTransforms] = useState(['translateX(-100%) rotate(-0.1turn)', 'translateX(0) rotate(0) scale(1.2)', 'translateX(100%) rotate(0.1turn)']);
    const [zIndeces, setZindeces] = useState([0,1,-1]);

    const [ticker, setTicker] = useState(false);


    useEffect(()=>{
        //do stuff.
        let newTransforms = transforms.slice(1).concat(transforms[0]);
        setTransforms(newTransforms);
        let newZs = zIndeces.slice(1).concat(zIndeces[0]);
        setZindeces(newZs);

        setTimeout(()=>setTicker(!ticker), 3000);
    },[ticker]);

    return (
        <View style={HomeStyles.doubleBox}>
        {keys.map((key, idx) => {
            return <View style={{
                position: 'absolute',
                height: '30%',
                width: '30%',
                zIndex: zIndeces[idx]

            }}>
                <Image source={process.env.REACT_APP_BEE_URL+key}
                        style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover',
                            transition: 'ease 1s',
                            transform: transforms[idx],
                        }}
                        />
            </View>
        })}

        </View>
    )
};

export default HomeRotator;