import React, { useState } from 'react';
import { MDBCardText, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import CardProduct from "./CardProduct";

import { useSelector } from "react-redux";

const FavouriteProductList = () => {
    const products = useSelector(state => state.favouriteProducts);
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
        </MDBContainer>
    )
}
export default FavouriteProductList;