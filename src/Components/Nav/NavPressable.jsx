
import { useContext, useEffect } from 'react';
import { Image, Pressable, Text} from 'react-native-web';
import Context from '../../Utils/context.js';
import NavStyles from '../../Stylesheets/NavStyles';


const NavPressable = ({scrollToId, text = null, url}) => {
    const { setPrefix } = useContext(Context);

    return (
        <Pressable 
        style={NavStyles.pressable}
        onPressIn={() => setPrefix(text)}
        onPressOut={() => scrollToId.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
            <Image source={url} alt={text || null} style={NavStyles.pressable} />

            { text[text.length-1] === '/' ?
                <Text style={NavStyles.pressableText}> Scroll to {text.substring(0, text.length-1)} </Text>
                : null
            }

        </Pressable>
    );
};

export default NavPressable;