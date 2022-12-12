import { forwardRef } from "react";
import { View, Text } from 'react-native-web';
import AboutStyles from '../Stylesheets/AboutStyles';

const About = forwardRef((props, ref) => {
    return (
        <View ref={ref} style={AboutStyles.container}>
            <Text>
                Hello from About.
            </Text>
        </View>
    )
})

export default About;