import {
    MDBBtn,
    MDBCard, MDBCardBody,
    MDBCardImage, MDBCardText, MDBCardTitle,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";
import CardProduct from "./CardProduct";
import CategoryApi from "../api/CategoryApi";
import {useDispatch} from "react-redux";
import {loadCategories} from "../store/Action";
import React, {useEffect, useState} from "react";
import ProductApi from "../api/ProductApi";
import Loading from "./Loading";

const SliderProduct = (data) => {
    const listProduct = data.products;

    function createCardProducts(start, end) {
        let card = [];
        for (let i = start; i < end; i++) {
            card.push(
                <MDBCol md="3">
                    <CardProduct product={listProduct[i]}/>
                </MDBCol>);
        }
        return card;
    }

    if (listProduct.length <= 0)
        return (<div style={{height: "600px"}} className='d-flex justify-content-center align-items-center'>
            <Loading/>
        </div>)
    return (
        <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={false} multiItem  >
            <MDBCarouselInner>
                <MDBRow>
                    <MDBCarouselItem itemId="1">
                        {createCardProducts(0, 4)}
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        {createCardProducts(4, 8)}
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        {createCardProducts(8, 12)}
                    </MDBCarouselItem>
                </MDBRow>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}
export default SliderProduct;