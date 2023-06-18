import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow} from "mdbreact";
import React from "react";
import {useSelector} from "react-redux";

const Bill = () => {
    const cart = useSelector(state => state.cart);

    function generateItem() {
        let items = [];
        for (const item of cart) {
            items.push(
                <>
                    <MDBRow>
                        <MDBCol sm="8">{item.product.name}</MDBCol>
                        <MDBCol
                            sm="4">{(item.product.salePrice * item.amount).toLocaleString('en-US').replaceAll(',', '.')}</MDBCol>
                    </MDBRow>
                    <hr/>
                </>
            )
        }
        return items;
    }

    function sum() {
        let sum = 0;
        for (const item of cart) {
            sum += item.product.salePrice * item.amount;
        }
        return sum;
    }

    return (
        <MDBCard>
            <MDBCardBody>
                <h4 className="mb-4 mt-1 h4 text-center font-weight-bold orange-text">
                    Hóa đơn
                </h4>
                <hr/>
                {generateItem()}
                <MDBRow>
                    <MDBCol sm="8">
                        <strong>Tổng</strong>
                    </MDBCol>
                    <MDBCol sm="4">
                        <strong>{sum().toLocaleString('en-US').replaceAll(',', '.')}</strong>
                    </MDBCol>
                </MDBRow>
                <hr/>
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