import {NavLink, Outlet} from "react-router-dom";

const ProductLayout = () => {
    return (
        <div>
            <nav>
                <ul className={'nav-list'}>
                    <NavLink to={'bread'}><li>bread</li></NavLink>
                    <NavLink to={'dairy'}><li>dairy</li></NavLink>
                </ul>
            </nav>
            <Outlet/>

        </div>
    );
};

export default ProductLayout;