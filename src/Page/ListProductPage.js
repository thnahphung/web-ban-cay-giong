import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useEffect } from "react";
import ProductList from "../Component/ProductList";
import { loadProduct } from "../store/Action";
import { products as p } from "../Data/ProductData";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
import Pagination from "../Component/Pagination";
import ListCategoryBar from "../Component/ListCategoryBar";


const ListProductPage = () => {
    // const products = useSelector(state => state.products);
    // const cart = useSelector(state => state.cart);
    //
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(loadProduct(p));
    // })
    return (
        <Fragment>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3"><ListCategoryBar /></MDBCol>
                    <MDBCol md="9">
                        <ProductList></ProductList>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </Fragment>)
}

export default ListProductPage;