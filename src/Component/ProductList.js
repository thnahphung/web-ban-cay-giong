import React, {useState} from 'react';
import {MDBCardText, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import CardProduct from "./CardProduct";
import Pagination from "./Pagination";

const ProductList = (data) => {
    // const [products, setProducts] = useState(data.products);
    const products = [0, 2, 3, 2, 2, 3, 3, 34, 8];
    return (
        <MDBContainer>
            <MDBRow>
                {products.map(product => (
                    <MDBCol md="4">
                        <CardProduct/>
                    </MDBCol>
                ))
                }
            </MDBRow>
            <Pagination className='float-right'/>
        </MDBContainer>

    )
}
export default ProductList