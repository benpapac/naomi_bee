import { useEffect, forwardRef, useContext } from 'react';
import { View, Text, Pressable } from 'react-native-web';
import RefsContext from '../../Utils/context';


const Nav = forwardRef((props, ref) => {
    const refs = useContext(RefsContext);



    return (
        <View ref={ref} style={{height: '100vh', width: '100vw'}}>
            <Text>
                Hello from Nav
            </Text>

            <Pressable onPressOut={()=> refs.galleriesRef.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
        <Text>Scroll to Galleries</Text>
            </Pressable>
        </View>
    )
});

export default Nav;