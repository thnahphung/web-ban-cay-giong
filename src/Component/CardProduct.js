import React, {Fragment, useState} from 'react';
import '../style/card-product.css'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBView,
    MDBIcon, MDBMask, MDBRating, MDBCardHeader
} from 'mdbreact';
import {useDispatch} from "react-redux";
import {addCart} from "../store/Action";
import {Link} from "react-router-dom";
import Rating from "./Rating";

const CardProduct = (data) => {
    const [product, setProduct] = useState(data);
    // const dispatch = useDispatch();
    // function clickAdd() {
    //     dispatch(addCart(product));
    // }

    return (
            <MDBCard className="mb-3">
                <MDBBtn floating color='default' className='button-add-cart'>
                    <MDBIcon icon="cart-plus"/>
                </MDBBtn>
                <MDBView hover zoom>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='https://makagarden.vn/wp-content/uploads/2020/12/dat-trong-hoa-namix-cover-makagarden.jpg'
                        alt='man'
                    />
                </MDBView>

                <MDBCardBody cascade className='text-center'>
                    <MDBCardTitle className='card-title'>
                        <strong>Billy Coleman</strong>
                    </MDBCardTitle>

                    <span className='font-weight-bold blue-text mr-3'> 10.000 Đ</span>
                    <span className='font-weight-bold blue-grey-text'><del>15.000 Đ</del></span>
                    <Rating className='justify-content-center' rate={3}/>
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