import { useEffect, forwardRef, useContext } from 'react';
import { View, Text, Pressable } from 'react-native-web';
import RefsContext from '../../Utils/context';
import NavReturn from '../Nav/NavReturn';
import NavPressable from './NavPressable';


const Nav = forwardRef((props, ref) => {
    const refs = useContext(RefsContext);



    return (
        <View ref={ref} style={{height: '100vh', width: '100vw'}}>
            <Text>
                Hello from Nav
            </Text>

            <NavPressable scrollToId={refs.galleriesRef} text='Scroll to Galleries' />
            <NavPressable scrollToId={refs.aboutRef} text='Scroll to About' />
            <NavPressable scrollToId={refs.bookingRef} text='Scroll to Booking' />
            <NavPressable scrollToId={refs.faqRef} text='Scroll to faq' />
        </View>
    )
});

export default Nav;