import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Side from '../SideBar/Side';

import "./Root.css"

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='side-bar'>
                <Side></Side>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;