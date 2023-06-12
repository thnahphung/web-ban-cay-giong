import {
    MDBNav,
    MDBNavItem
} from "mdbreact";
import {NavLink} from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <header>
            <div className={`mb-4`}>
                <Search/>
                <MDBNav pills className="flex-center">
                    <MDBNavItem>
                        <NavLink to="/" className={`nav-link`}>Trang chủ</NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink to="/san-pham" className={`nav-link`}>Sản phẩm</NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink to="/gioi-thieu" className={`nav-link`}>Giới thiệu</NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink to="/tin-tuc" className={`nav-link`}>Tin tức</NavLink>
                    </MDBNavItem>
                </MDBNav>
            </div>
        </header>
    )

}

export default Header