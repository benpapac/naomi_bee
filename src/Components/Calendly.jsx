import React, { forwardRef } from 'react';
import { View, Text } from 'react-native-web';
import CalendlyStyles from '../Stylesheets/CalendlyStyles';

const Calendly = forwardRef((props, ref) => {
    const URL = process.env.REACT_APP_CALENDLY_URL;


    return (
        <View ref={ref}
        className="calendly-inline-widget"
        style={CalendlyStyles.container}
        >
            <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title={"Naomi's Scheduling Page"}
            src={URL}
            ></iframe>
        </View>
    )
});

export default Calendly;

        /* <InlineWidget url={URL} /> */