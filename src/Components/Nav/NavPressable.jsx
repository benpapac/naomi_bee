
import { useContext, useState, useRef, useEffect } from 'react';
import { Image, Pressable, Text} from 'react-native-web';
import Context from '../../Utils/context.js';
import NavStyles from '../../Stylesheets/NavStyles';


const NavPressable = ({ direction, scrollToId, text = null, url}) => {
    const { setPrefix } = useContext(Context);
    const [textDisplay, setTextDisplay] = useState('hidden');
    const [imageDisplay, setImageDisplay] = useState('hidden');
    const [animation, setAnimation] = useState('');
    const context = useContext(Context);

    const handleMouseOn = () => {
        setTextDisplay('visible');
        setAnimation('1s infinite alternate vibrate');
        setImageDisplay('visibleImage');
    }

    const handleMouseLeave = () => {
        setTextDisplay('hidden');
        setAnimation('none');
        setImageDisplay('hiddenImage');
    }


    useEffect(()=>{
        console.log(context[scrollToId+'Ref']);
    },[])

    return (
        <Pressable 
        style={{...NavStyles.navPressable, overflow: 'hidden'}}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseLeave}
        onPressIn={() => setPrefix(text)}
        onPressOut={() => context[`${scrollToId}Ref`].current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
            <Image source={url} alt={text || null} style={{...NavStyles[imageDisplay+direction], animation: animation}} />

            { text[text.length-1] === '/' ?
                <Text style={NavStyles[`${textDisplay}Text`]}> Scroll to {text.substring(0, text.length-1)} </Text>
                : null
            }

        </Pressable>
    );
};

export default NavPressable;