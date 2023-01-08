import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native-web';
import HomeStyles from '../../Stylesheets/HomeStyles';
import getAllKeys from '../../Utils/s3';

const HomeSlides = () => {

    const [keys, setKeys] = useState({});
    const [ticker, setTicker] = useState(false);
    const [transform, setTransform] = useState(0);


    useEffect(()=>{
        if(!keys.muertos){
            getAllKeys('muertos', keys, setKeys);
        }
    },[]);

    useEffect(()=>{
        if(keys.muertos ){
            if(transform >= (100 - 2*(100/keys.muertos.length) ) ){
                setTransform(0);
            } else {
                setTransform(transform ? transform+ (100/keys.muertos.length): (100/keys.muertos.length));
            }
                //  let newArr = keys.muertos;
    
                // newArr = newArr.slice(1).concat(newArr[0]);
    
                // setKeys({
                //     ...keys,
                //     muertos: newArr
                // });
            }
        setTimeout(()=>{
            setTicker(!ticker);
        },3000)


    },[ticker]);

    if(!keys.muertos){
        return <h1>Loading...</h1>
    }


    return (
        <View style={HomeStyles.tallBox}>
            <View style={{...HomeStyles.slides,
                transform: `translateX(-${transform}%)`,
            }}>

                {keys.muertos.map((key, idx) => {
                    return (
                        <View style={{
                            marginVertical: 'auto',
                            borderWidth: '1px',
                            borderColor: 'gray',
                            borderRadius: '1em',
                            height: '100%',
                            width: '10vw',
                            overflow: 'hidden',
                        }}>
                        <Image source={process.env.REACT_APP_BEE_URL+key}
                            style={{
                                
                                height: '100%',
                                width: '100%', 
                                resizeMode: 'cover',
                            }} 
                            />
                    </View>
                )
                })}
            </View>
        </View>
    )
};












export default HomeSlides;