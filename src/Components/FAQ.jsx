import { forwardRef } from 'react';
import { View, Text } from'react-native-web';
import FAQStyles from '../Stylesheets/FAQStyles';
import NavReturn from './Nav/NavReturn';

const FAQ = forwardRef((props, ref) => {
    return ( 
        <View ref={ref} style={FAQStyles.container}>
            <Text>
                Hello from FAQ.
            </Text>

            <NavReturn />
        </View>
    )
})

export default FAQ;