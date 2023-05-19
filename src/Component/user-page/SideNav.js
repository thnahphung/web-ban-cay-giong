import React, {Fragment} from 'react';
import {MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge} from "mdbreact";

const SideNav = () => {
    return (
        <Fragment>
            <h3  style={{fontSize:'18px',textTransform: 'uppercase'}}><strong>Tài khoản</strong></h3>

            <MDBListGroup style={{width: "15rem"}}>
                <MDBListGroupItem href="#" active style={{borderColor: "white", backgroundColor: "grey"}}>Tài khoản của
                    tôi</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Danh sách địa chỉ</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Đăng xuất</MDBListGroupItem>
            </MDBListGroup>
        </Fragment>
    )
        ;
};

export default SideNav;