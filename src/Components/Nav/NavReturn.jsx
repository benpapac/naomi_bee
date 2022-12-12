import { useContext } from 'react';
import NavPressable from './NavPressable';
import Context from '../../Utils/context';


const NavReturn = () => {
    const { navRef } = useContext(Context);
    return (
        <NavPressable scrollToId={navRef} text='Return to Nav' />
    )
}

export default NavReturn;