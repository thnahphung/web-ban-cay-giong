import React, { useState } from 'react';
import { MDBCardText, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import CardProduct from "./CardProduct";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const ProductList = (data) => {
    const products = useSelector(state => state.products);
    const loading = useSelector(state => state.loadingProduct);

    if (loading === true) {
        return (<div style={{ height: "600px" }} className='d-flex justify-content-center align-items-center'>
            <Loading />
        </div>)
    }
    return (
        <MDBContainer>
            <MDBRow>
                {products.map(product => (
                    <MDBCol md="4" key={product.id}>
                        <CardProduct key={product.id} product={product} />
                    </MDBCol>
                ))
                }
            </MDBRow>
            <Pagination className='d-flex justify-content-center' />
        </MDBContainer>
    )
}
export default ProductList