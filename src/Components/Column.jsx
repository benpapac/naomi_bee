import React from 'react';
import { View } from 'react-native-web';
import AppStyles from '../Stylesheets/AppStyles';

const Column = ({ id, numRows, children}) => {
    return (
         <View id={id} style={AppStyles[`${numRows}col`]}>{children}</View>
    );
};

export default Column;