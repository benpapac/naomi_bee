import React, { useContext, useEffect, useState } from 'react';
import { Pressable, Image } from 'react-native-web';
import Context from '../../Utils/context';

const NavImage = ({ uri, prefix, refId }) => {
    const { setPrefix, galleriesRef } = useContext(Context);

    const styles = ['smallRight', 'smallLeft', 'tallRight', 'tallLeft','shortRight','shortLeft'];
    const [clicked, setClicked] = useState(false);

    const context = useContext(Context);



    // const getRandomAnimation = () => {
    //     // let animations = ['slide-up', 'orbit', 'slide-down', 'slide-left'];
    //     let randomNumber = Math.floor( Math.random()*(animations.length) );
    //     let time = Math.floor(Math.random()*10)+2;
        
    //     // return ` ${time}s infinite alternate ${animations[randomNumber]} `
    // }

    // const animation = getRandomAnimation();


    let pressableStyle = 
        { flexGrow: '1', margin: '3vh 0', border: 'solid 1px white',  height: '33%', width: '20%' }

    return (
        <Pressable 
            style={ pressableStyle }
            onPressIn={() => prefix && setPrefix(prefix+'/')}
            onPressOut={() => refId && context[refId].current.scrollIntoView({behavior: 'smooth', block: 'center'})}
            
            key={uri}
        >

            <Image  
            // loadingIndicatorSource={}

            source={{ uri: uri}} 
            style={{ height: '100%', width: '100%', resizeMode: 'resize', objectFit: 'cover', verticalAlign: 'bottom'}}
            />
            
        </Pressable>
    );
};

export default NavImage;