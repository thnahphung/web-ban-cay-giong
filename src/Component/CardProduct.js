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
import { Link } from 'react-router-dom';

import Rating from "./Rating";
import { addCart } from "../store/Action";
import { useDispatch, useSelector } from "react-redux";

const CardProduct = (data) => {
    const product = data.product;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function handleAdd(product) {
        const item = cart.find(item => item.product.id === product.id);
        if (item === undefined)
            dispatch(addCart(product, 1));
        else dispatch(addCart(product, item.amount + 1));
    }

    return (
        <MDBCard className="mb-3">
            <MDBBtn floating color='default' className='button-add-cart' onClick={() => handleAdd(product)}>
                <MDBIcon icon="cart-plus" />
            </MDBBtn>
            <MDBView hover zoom>
                <Link to={`/${product.urlCategory}/${product.urlParam}`}>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src={product.image[0]}
                        alt='man'
                    /></Link>
            </MDBView>

            <MDBCardBody cascade className='text-center'>
                <Link to={`/${product.urlCategory}/${product.urlParam}`}>
                    <MDBCardTitle className='card-title' style={{ height: "56px" }}>
                        <strong>{product.name}</strong>
                    </MDBCardTitle>
                </Link>
                {product.originPrice === product.salePrice ?
                    <span
                        className='font-weight-bold blue-text mr-3'>{product.salePrice.toLocaleString('en-US').replaceAll(',', '.')} VND</span> :
                    <>
                        <span
                            className='font-weight-bold blue-text mr-3'>{product.salePrice.toLocaleString('en-US').replaceAll(',', '.')} VND</span>
                        <span className='font-weight-bold blue-grey-text'><del>{product.originPrice.toLocaleString('en-US').replaceAll(',', '.')} Đ</del></span>
                    </>
                }

                <Rating className='justify-content-center' rate={product.rate} />
                <MDBCol md='12' className='d-flex justify-content-center'>
                    <Link to={`/${product.urlCategory}/${product.urlParam}`}>
                        <MDBBtn rounded color='default'>
                            Chi tiết
                        </MDBBtn>
                    </Link>
                </MDBCol>
            </MDBCardBody>
        </MDBCard >
    )
}

export default CardProduct;