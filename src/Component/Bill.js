import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow} from "mdbreact";
import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {cartTotal} from "../store/SupportFuntion";

const Bill = (data) => {
    const cart = useSelector(state => state.cart);
    const isFee = data.fee || false;

    function generateItem() {
        let items = [];
        for (const item of cart) {
            items.push(
                <Fragment key={item.product.id}>
                    <MDBRow>
                        <MDBCol sm="8">{item.product.name}</MDBCol>
                        <MDBCol sm="4">
                            {isFee ? <span className={`text-default mr-2 bold font-weight-bold`}> x{item.amount}</span> : <span></span>}
                            {(item.product.salePrice * item.amount).toLocaleString('en-US').replaceAll(',', '.')}
                        </MDBCol>
                    </MDBRow>
                    <hr/>
                </Fragment>
            )
        }
        return items;
    }

    return (
        <MDBCard>
            <MDBCardBody>
                <h4 className="mb-4 mt-1 h4 text-center font-weight-bold orange-text">
                    Hóa đơn
                </h4>
                <hr/>
                {generateItem()}
                {isFee ?
                    <>
                        <MDBRow className={`text-danger`}>
                            <MDBCol sm="8">Phí giao hàng</MDBCol>
                            <MDBCol sm="4">
                                {(30000).toLocaleString('en-US').replaceAll(',', '.')}
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                    </> : <div></div>}
                <MDBRow>
                    <MDBCol sm="8">
                        <strong>Tổng</strong>
                    </MDBCol>
                    <MDBCol sm="4">
                        {isFee ?
                            <strong>{(cartTotal(cart) + 30000).toLocaleString('en-US').replaceAll(',', '.')}</strong> :
                            <strong>{cartTotal(cart).toLocaleString('en-US').replaceAll(',', '.')}</strong>
                        }
                    </MDBCol>
                </MDBRow>
                <hr/>
                {data.disableBtn === true ? '' :
                    <MDBRow>
                        <MDBCol>

                            <Link to={`${data.link}`}>
                                <MDBBtn rounded className={`float-right`}>{data.label}
                                </MDBBtn>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                }
            </MDBCardBody>
        </MDBCard>
    )
}

export default Bill