
import { useContext } from 'react';
import { Image, Pressable, Text} from 'react-native-web';
import Context from '../../Utils/context.js';
import NavStyles from '../../Stylesheets/NavStyles';
import { AmbiguousRoleResolutionType } from '@aws-sdk/client-cognito-identity';


const NavPressable = ({scrollToId, text, url = null}) => {
    const { setPrefix } = useContext(Context);

    if(url) {
        return (
            <Pressable 
            style={NavStyles.pressable}
            onPressIn={() => setPrefix(text)}
            onPressOut={() => scrollToId.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
                <Image source={url} alt={text} style={NavStyles.pressable} />
                <Text style={NavStyles.pressableText}>Scroll to {`${text.substring(0, text.length-1)}`}</Text>
            </Pressable>
    );
} else{ 
        return (
            <Pressable 
            style={NavStyles.pressable}
            onPressOut={() => scrollToId.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
                <Text>{text}</Text>
            </Pressable>

    )
}
};

export default NavPressable;