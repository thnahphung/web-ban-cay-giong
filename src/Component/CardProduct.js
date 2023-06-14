import React from 'react';
import '../style/card-product.css'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol,
    MDBView,
    MDBIcon
} from 'mdbreact';

import Rating from "./Rating";
import {addCart} from "../store/Action";
import {useDispatch} from "react-redux";

const CardProduct = (data) => {
    const product = data.product;
    const dispatch = useDispatch();

    function handleAdd() {
        dispatch(addCart(product));
    }

    return (
        <MDBCard className="mb-3">
            <MDBBtn floating color='default' className='button-add-cart' onClick={handleAdd}>
                <MDBIcon icon="cart-plus"/>
            </MDBBtn>
            <MDBView hover zoom>
                <MDBCardImage
                    hover
                    overlay='white-light'
                    className='card-img-top'
                    src={product.image[0]}
                    alt='man'
                />
            </MDBView>

            <MDBCardBody cascade className='text-center'>
                <MDBCardTitle className='card-title'>
                    <strong>{product.name}</strong>
                </MDBCardTitle>

                {product.originPrice === product.salePrice ?
                    <span className='font-weight-bold blue-text mr-3'> 10.000 Đ</span> :
                    <>
                        <span className='font-weight-bold blue-text mr-3'> 10.000 Đ</span>
                        <span className='font-weight-bold blue-grey-text'><del>15.000 Đ</del></span>
                    </>
                }

                <Rating className='justify-content-center' rate={product.rate}/>
                <MDBCol md='12' className='d-flex justify-content-center'>
                    <MDBBtn rounded color='default'>
                        Chi tiết
                    </MDBBtn>
                </MDBCol>
            </MDBCardBody>
        </MDBCard>
    )
}

export default CardProduct;