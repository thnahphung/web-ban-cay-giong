import React, { Fragment } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";

const SideNav = () => {
    function logOut() {
        sessionStorage.clear();
    }
    return (
        <Fragment>
            <h3 style={{ fontSize: '18px', textTransform: 'uppercase' }}><strong>Tài khoản</strong></h3>

            <MDBListGroup style={{ width: "15rem" }}>
                <MDBListGroupItem href="#" active style={{ borderColor: "white", backgroundColor: "#2BBBAD" }}>Thông tin tài khoản</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Danh sách địa chỉ</MDBListGroupItem>
                <MDBListGroupItem href="/" onClick={logOut} hover>Đăng xuất</MDBListGroupItem>
            </MDBListGroup>
        </Fragment>
    )
        ;
};
export default SideNav;