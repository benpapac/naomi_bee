import { forwardRef} from 'react';
import { View, Text } from 'react-native-web';

import Gallery from './Gallery';
import NavReturn from '../Nav/NavReturn';


const Galleries = forwardRef((props, ref) => {

    return (
        <View ref={ref} style={{height: '100vh', width: '100vw'}}>
            <Text>
                Hello from Galleries;
            </Text>

            <Gallery />
            <NavReturn />
        </View>
    )
});

export default Galleries;