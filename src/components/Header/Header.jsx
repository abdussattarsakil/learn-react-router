import { NavLink } from "react-router";
import "./Header.css"

const Header = () => {
    return (
        <div className="text-center pb-10 space-y-2">
            <h1 className="">This is header</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="mobiles">Mobiles</NavLink>
                <NavLink to="laptops">Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;