import { useEffect, forwardRef, useContext } from 'react';
import { View, Text, Pressable } from 'react-native-web';
import RefsContext from '../../Utils/context';
import NavReturn from '../Nav/NavReturn';
import NavPressable from './NavPressable';
import NavStyles from '../../Stylesheets/NavStyles';


const Nav = forwardRef((props, ref) => {
    const refs = useContext(RefsContext);
    const BEE_URL = process.env.REACT_APP_BEE_URL;

    const NAV_SKULL= process.env.REACT_APP_SKULL;
    const NAV_BUTTERFLY= process.env.REACT_APP_BUTTERFLY;
    const NAV_KID= process.env.REACT_APP_KID;


    return (
        <View ref={ref} style={NavStyles.container}>
            <NavPressable scrollToId={refs.aboutRef} text='About' url={{uri: process.env.REACT_APP_HOME}}/>
            <NavPressable scrollToId={refs.galleriesRef} text='muertos/' url={{uri: BEE_URL+NAV_SKULL}} />

            <NavPressable scrollToId={refs.galleriesRef} text='adults/' url={{uri: BEE_URL+NAV_BUTTERFLY}} />
            <NavPressable scrollToId={refs.bookingRef} text='Booking' url={{uri: process.env.REACT_APP_BOOKING}}/>
            
            <NavPressable scrollToId={refs.galleriesRef} text='birthdays/' url={{uri: BEE_URL+NAV_KID}} />
            <NavPressable scrollToId={refs.faqRef} text='faq' url={{uri: process.env.REACT_APP_FAQ}}/>
        </View>
    )
});

export default Nav;