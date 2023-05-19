import SideNav from "../Component/user-page/SideNav";
import OrderHistory from "../Component/user-page/OrderHistory";
import React, {Fragment} from "react";
import {MDBBadge, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import UserInfor from "../Component/user-page/UserInfor";


const UserPage = () => {
    return (

        <MDBContainer>
            <div className={`mb-5`} style={{borderBottom: "1px solid #DCDCDC"}}>
                <h1 className={`d-flex justify-content-center mb-5 mt-5`} style={{fontFamily: 'Quicksand'}}><strong>Tài
                    khoản của bạn </strong></h1>
                <div className="mx-auto mb-4" style={{
                    width: '100px',
                    height: '3px',
                    borderRadius: '20px',
                    justifyContent: "center",
                    backgroundColor: 'black'
                }}>
                </div>
            </div>
            <MDBRow className={`d-md-flex justify-content-between`}>
                <MDBCol md={3}>
                    <SideNav/>
                </MDBCol>
                <MDBCol md={9}>
                    <UserInfor/>
                    <OrderHistory/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export default UserPage;