import {MDBCol, MDBRow} from "mdbreact";
import React, {Fragment} from "react";

const UserInfor = (data) => {
    const user = data.user;
    return (
        <Fragment>
            <h3 style={{
                fontSize: '18px',
                textTransform: 'uppercase',
                paddingBottom: '20px',
                borderBottom: '1px solid #DCDCDC'
            }}><strong>Thông tin tài khoản</strong></h3>
            <div className={'ml-3'}>
                <MDBRow>
                    <MDBCol md={'4'}>Họ và tên</MDBCol>
                    <MDBCol md={'8'}>{user.name}</MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow>
                    <MDBCol md={'4'}>Số điện thoại</MDBCol>
                    <MDBCol md={'8'}>{user.phone}</MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow>
                    <MDBCol md={'4'}>Email</MDBCol>
                    <MDBCol md={'8'}>{user.email}</MDBCol>
                </MDBRow>
                <hr/>
            </div>
        </Fragment>
    );
}
export default UserInfor;