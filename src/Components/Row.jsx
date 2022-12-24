import React from 'react';
import { View } from 'react-native-web';
import AppStyles from '../Stylesheets/AppStyles';

const Row = ({ children }) => {
    return (
        <View style={AppStyles.row}>{children}</View>
    );
};

export default Row;