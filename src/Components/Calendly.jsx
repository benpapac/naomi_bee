import React, { forwardRef } from 'react';
import { View, Text } from 'react-native-web';
import CalendlyStyles from '../Stylesheets/CalendlyStyles';

const Calendly = forwardRef((props, ref) => {
    return (
        <View ref={ref} style={CalendlyStyles.container}>
            <Text>
            Hello from Calendly
            </Text>

        </View>
    )
});

export default Calendly;