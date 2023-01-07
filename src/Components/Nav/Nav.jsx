import React, { useEffect, useState } from 'react';
import { View } from 'react-native-web';
import { NavLink } from 'react-router-dom';
import NavStyles from '../../Stylesheets/NavStyles';
import NavToggler from './NavToggler';

import '../../Animations/animation.nav.css';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const [containerStyle, setContainterStyle] = useState('hiddenContainer');


    useEffect(()=>{
        setTimeout(() => {
            setContainterStyle(!nav ? 'hiddenContainer' : 'container');
        }, 100);

    },[nav]);


    return (
        <>
            <View style={NavStyles[containerStyle]}>
                <NavToggler nav={nav} setNav={setNav} />
                <NavLink style={NavStyles.link} onClick={ ()=> setNav(false) } to='/'>Home</NavLink>
                <NavLink style={NavStyles.link} onClick={ ()=> setNav(false) } to='/about'>About</NavLink>
                <NavLink style={NavStyles.link} onClick={ ()=> setNav(false) } to='/faq'>FAQ</NavLink>
                <NavLink style={NavStyles.link} onClick={ ()=> setNav(false) } to='/gallery'>Galleries</NavLink>
                <NavLink style={NavStyles.link} onClick={ ()=> setNav(false) } to='/booking'>Bookings</NavLink>
                <NavLink style={NavStyles.link} onClick={ ()=> setNav(false) } to='/contact'>Contact</NavLink>
        <NavToggler nav={nav} setNav={setNav} />
            </View> 
        <NavToggler nav={nav} setNav={setNav} />
    </>
    );
};

export default Nav;