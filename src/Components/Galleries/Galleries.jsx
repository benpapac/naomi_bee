import { forwardRef} from 'react';
import { View, Text } from 'react-native-web';

import Gallery from './Gallery';


const Galleries = forwardRef((props, ref) => {

    return (
        <View ref={ref} style={{height: '100vh', width: '100vw'}}>
            <Text>
                Hello from Galleries;
            </Text>

            <Gallery />
        </View>
    )
});

export default Galleries;