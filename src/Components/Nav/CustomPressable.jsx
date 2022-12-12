
import { ImageBackground, Pressable} from 'react-native-web';


const CustomPressable = (props) => {

    return (
         <ImageBackground source={props.url}>
            <Pressable></Pressable>
            </ImageBackground>
    );
};

export default CustomPressable;