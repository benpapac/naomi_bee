import { forwardRef} from 'react';
import { View, Text } from 'react-native-web';


const Galleries = forwardRef((props, ref) => {

    return (
        <View ref={ref} style={{height: '100vh', width: '100vw'}}>
            <Text>
                Hello from Galleries;
            </Text>
        </View>
    )
});

export default Galleries;