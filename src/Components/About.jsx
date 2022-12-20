import { forwardRef } from "react";
import { View, Text } from 'react-native-web';
import AboutStyles from '../Stylesheets/AboutStyles';
import NavReturn from "./Nav/NavReturn";

const About = forwardRef((props, ref) => {
    return (
        <View ref={ref} style={AboutStyles.container}>
            <Text>
                Her name? Baby. Her mission? Being a sexy lady.
            </Text>
            <Text>
               Naomi has been sexy for over over 18 years. With that much experience, she's just gotta be the best in the business by now. Did you know that Hummel is German for bumblebee? How cool is that? That's why all of Naomi's burlesque routines involve a bumble bee element, whether it's oversized foam bee pasties, or an entire act dedicated to the life cycle of a bumble bee (set to the classic orchestral piece, "the bumblebee," of course!)
            </Text>
            <Text>
                Naomi loves to share her burlesque skills with audiences on Broadway, at regional theaters, and even celebrity birthday parties! If you were thinking, " a stripping bumble bee is JUST what I need for my birthday," then you've come to the right place! Just head on down to the Booking section and add your event to Naomi's Calendar.
            </Text>
            <NavReturn />
        </View>
    )
})

export default About;