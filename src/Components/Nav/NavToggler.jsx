import { useState, useEffect } from 'react';
import Context from '../../Utils/context';
import NavStyles from '../../Stylesheets/NavStyles';
import '../../Animations/animation.nav.css'
import { Pressable, Image } from 'react-native-web';


const NavToggler = ({ nav, setNav }) => {
    const MENU = process.env.REACT_APP_HAMBURGER;
    const EXIT = process.env.REACT_APP_EXIT;
    const [navTogglerStyle, setNavTogglerStyle] = useState('navToggler');
    const [navTogglerImage, setNavTogglerImage] = useState(MENU);

    useEffect(()=>{
        if(!nav){
            setNavTogglerStyle('hiddenToggler');
            setTimeout(()=>{
                setNavTogglerImage(!nav ? MENU : EXIT);
                setNavTogglerStyle('toggler');
            },1000);
        } else {
            setNavTogglerStyle('hiddenToggler');
            setTimeout(()=>{
                setNavTogglerImage(!nav ? MENU : EXIT);
                setNavTogglerStyle('toggler');
            },1000);
        }

    },[nav]);

    return (
        <Pressable style={NavStyles[navTogglerStyle]}
         onPressOut={() => setNav(!nav)}>
                <Image source={navTogglerImage} alt={'return to Nav'} style={NavStyles.navTogglerImage} />
            </Pressable>
    )
}

export default NavToggler;