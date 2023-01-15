import React, { useContext } from 'react';
import { View, Pressable, Text } from 'react-native-web';

import GalleryStyles from '../../Stylesheets/GalleryStyles';

import Context from '../../Utils/context';
const Buttons = () => {
    const { setPrefix } = useContext(Context);

    return (
        <View style={GalleryStyles.buttonsContainer}>
                <Pressable onPress={()=>setPrefix('muertos')} style={GalleryStyles.button}> 
                    <Text>Dia de Los Muertos</Text>
                    </Pressable>
                <Pressable onPress={()=>setPrefix('birthdays')} style={GalleryStyles.button}>
                    <Text>Birthdays</Text>
                </Pressable>
                <Pressable onPress={()=>setPrefix('adults')} style={GalleryStyles.button}>
                    <Text>Adults too!</Text>
                </Pressable>
            </View>
    );
};

export default Buttons;