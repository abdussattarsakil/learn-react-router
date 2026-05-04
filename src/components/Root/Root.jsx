import { Outlet, useNavigation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Side from '../SideBar/Side';

import "./Root.css"

const Root = () => {
    const navigation = useNavigation();
    const navigating = Boolean(navigation.location)
    return (
        <div>
            <Header></Header>
            <div className='side-bar'>
                <Side></Side>
                { navigating && <span>useNavigation loading.......</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;