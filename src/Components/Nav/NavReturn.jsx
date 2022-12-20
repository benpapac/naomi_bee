import { useContext } from 'react';
import Context from '../../Utils/context';
import NavStyles from '../../Stylesheets/NavStyles';
import { Pressable, Image } from 'react-native-web';


const NavReturn = () => {
    const MENU = process.env.REACT_APP_HAMBURGER;
    const { navRef } = useContext(Context);

    return (
        <Pressable style={NavStyles.navReturn}
         onPressOut={() => navRef.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
                <Image source={MENU} alt={'return to Nav'} style={NavStyles.navReturnImage} />
            </Pressable>
    )
}

export default NavReturn;