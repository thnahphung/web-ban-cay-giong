import {MDBRow} from "mdbreact";
import React, {Fragment} from "react";

const UserInfor = () => {
    return (
        <Fragment>
            <h3 style={{fontSize: '18px', textTransform: 'uppercase',paddingBottom: '20px', borderBottom: '1px solid #DCDCDC'}}><strong>Thông
                tin tài khoản</strong></h3>
            <div className={'ml-3'}>
                <MDBRow>Phan Thi Quynh Nhu</MDBRow>
                <MDBRow>0819541402</MDBRow>
                <MDBRow>112 Thon 1, xa CuSue, huyen Cumgar, tinh Dak Lak</MDBRow>
            </div>
        </Fragment>
    );
}
export default UserInfor;