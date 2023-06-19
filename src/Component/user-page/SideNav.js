import React, {Fragment} from 'react';
import {MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge} from "mdbreact";
import {Link} from "react-router-dom";

const SideNav = (data) => {
    const param = data.param

    function logOut() {
        sessionStorage.clear();
    }

    function createButton() {
        if (param === 'dia-chi') {
            return (
                <>
                    <Link to={'/ca-nhan/don-hang'}>
                        <MDBListGroupItem>Thông tin
                            tài
                            khoản</MDBListGroupItem>
                    </Link>
                    <Link to={'/ca-nhan/dia-chi'}><MDBListGroupItem active hover style={{
                        borderColor: "white",
                        backgroundColor: "#2BBBAD"
                    }}>Danh sách địa
                        chỉ</MDBListGroupItem></Link></>
            )
        } else if (param === 'don-hang') {
            return (
                <>
                    <Link to={'/ca-nhan/don-hang'}>
                        <MDBListGroupItem active style={{borderColor: "white", backgroundColor: "#2BBBAD"}}>Thông tin
                            tài
                            khoản</MDBListGroupItem>
                    </Link>
                    <Link to={'/ca-nhan/dia-chi'}><MDBListGroupItem hover>Danh sách địa chỉ</MDBListGroupItem></Link></>
            )
        }

    }

    return (
        <Fragment>
            <h3 style={{fontSize: '18px', textTransform: 'uppercase'}}><strong>Tài khoản</strong></h3>

            <MDBListGroup style={{width: "15rem"}}>
                {createButton()}

                <Link to={'/trang-chu'} onClick={logOut}> <MDBListGroupItem hover>Đăng xuất</MDBListGroupItem></Link>
            </MDBListGroup>
        </Fragment>
    )
        ;
};
export default SideNav;