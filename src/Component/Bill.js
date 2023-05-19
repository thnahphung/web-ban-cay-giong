import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow} from "mdbreact";
import React from "react";

const Bill = () => {
    return (
        <MDBCard>
            <MDBCardBody>
                <h4 className="mb-4 mt-1 h4 text-center font-weight-bold orange-text">
                    Hóa đơn
                </h4>
                <hr/>
                <MDBRow>
                    <MDBCol sm="8">
                        MDBootstrap UI KIT (jQuery version) - License 6-10
                        poeple + unlimited projects
                    </MDBCol>
                    <MDBCol sm="4">$ 2000</MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow>
                    <MDBCol sm="8">Premium support - 2 years</MDBCol>
                    <MDBCol sm="4">$ 200</MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow>
                    <MDBCol sm="8">MDB Membership - 2 years</MDBCol>
                    <MDBCol sm="4">$ 100</MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow>
                    <MDBCol sm="8">
                        <strong>Tổng</strong>
                    </MDBCol>
                    <MDBCol sm="4">
                        <strong>$ 2300</strong>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBBtn rounded>Tiếp tục thanh toán</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Bill