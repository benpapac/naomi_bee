import React, { useContext, useEffect, useState } from 'react';
import { Image, View } from 'react-native-web';
import GalleryStyles from '../../Stylesheets/GalleryStyles';

import Context from '../../Utils/context';

const Slides = ({ imageKeys }) => {
    const { transform, setTransform, activeUser, setActiveUser } = useContext(Context);

    const [ticker, setTicker] = useState(false);

    useEffect(()=>{
        if( activeUser ){
            console.log('active user');
            setTimeout(()=>{
                setTicker(!ticker);
                setActiveUser(false);
            }, 15000);
        } else {
            console.log('no user activity');
            if(imageKeys ){
                if(transform >= (100 - 2*(100/imageKeys.length) ) ){
                setTransform(0);
                } else {
                setTransform(transform ? transform+ (100/imageKeys.length): (100/imageKeys.length));
                }
            }
            setTimeout(()=>{
                setTicker(!ticker);
            },7000)
        }


    },[ticker, activeUser]);

    if(!imageKeys){
        return <h1>Loading...</h1>
    }


    return (
            <View style={GalleryStyles.slideBox}>
                <View style={{...GalleryStyles.slides,
                    transform: `translateX(-${transform}%)`,
                }}>

                    {imageKeys.map((key, idx) => {
                        return (
                            <View style={{
                                marginVertical: 'auto',
                                height: '100%',
                                width: '40vw',
                                overflow: 'hidden',
                            }}>
                            <Image source={process.env.REACT_APP_BEE_URL+key}
                                style={{
                                    
                                    height: '100%',
                                    width: '80%', 
                                    resizeMode: 'contain',
                                    // borderWidth: '1px',
                                    // borderColor: 'gray',
                                    borderRadius: '1em',
                                }} 
                                />
                        </View>
                    )
                    })}
                </View>
            </View>
    )
};

export default Slides;