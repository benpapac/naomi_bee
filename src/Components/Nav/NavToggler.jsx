import { useState, useEffect } from 'react';
import Context from '../../Utils/context';
import NavStyles from '../../Stylesheets/NavStyles';
import { Pressable, Image } from 'react-native-web';


const NavToggler = ({ nav, setNav }) => {
    const MENU = process.env.REACT_APP_HAMBURGER;
    const [navTogglerStyle, setNavTogglerStyle] = useState('navToggler');

    useEffect(()=>{
        setNavTogglerStyle(!nav ? 'navToggler' : 'hiddenToggler');
    },[nav]);

    return (
        <Pressable style={NavStyles[navTogglerStyle]}
         onPressOut={() => setNav(!nav)}>
                <Image source={MENU} alt={'return to Nav'} style={NavStyles.navReturnImage} />
            </Pressable>
    )
}

export default NavToggler;