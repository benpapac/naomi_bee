import React from 'react';
import { View } from 'react-native-web';
import { NavLink } from 'react-router-dom';
import NavStyles from '../../Stylesheets/NavStyles';

const Nav = () => {

    return (
        <View style={NavStyles.container}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/gallery'>Galleries</NavLink>
            <NavLink to='/booking'>Bookings</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </View>
    );
};

export default Nav;