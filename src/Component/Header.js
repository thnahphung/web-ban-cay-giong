import {
    MDBBtn,
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBNav,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarToggler, MDBNavItem,
    MDBNavLink
} from "mdbreact";
import {useState} from "react";
import {Link, NavLink, Router} from "react-router-dom";
import Search from "./Search";

const Header = () => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
           <div className={`mb-4`}>
               <Search/>
               <MDBNav pills className="flex-center">
                   <MDBNavItem>
                       <NavLink to="/" className={`nav-link`}>Trang chủ</NavLink>
                   </MDBNavItem>
                   <MDBNavItem>
                       <NavLink to="/danh-muc" className={`nav-link`}>Sản phẩm</NavLink>
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