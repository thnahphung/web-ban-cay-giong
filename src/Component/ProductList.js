import React, {useState} from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Product from "./Product";

const ProductList = (data) => {
    const [products, setProducts] = useState(data.products);
    return (
        <MDBContainer>
            <MDBRow>
                {products.map(product => (
                    <MDBCol>
                        <Product
                                 key={product.id}
                                 id={product.id}
                                 name={product.name}
                                 img={product.img}
                                 des={product.des}
                                 price={product.price}
                        />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>

    )
}
export default ProductList