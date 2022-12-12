
import { ImageBackground, Pressable, Text} from 'react-native-web';


const NavPressable = ({scrollToId, text, url = null}) => {

    if(url) {
        return (
         <ImageBackground source={url}>
            <Pressable onPressOut={() => scrollToId.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>

            </Pressable>
            </ImageBackground>
    );
} else{ 
        return (
            <Pressable onPressOut={() => scrollToId.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
                <Text>{text}</Text>
            </Pressable>

    )
}
};

export default NavPressable;