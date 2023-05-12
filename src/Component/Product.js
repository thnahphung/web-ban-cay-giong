import React, {useState} from 'react';

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol
} from 'mdbreact';
import {useDispatch} from "react-redux";
import {addCart} from "../store/Action";
import {Link} from "react-router-dom";

const Product = (data) => {
    const [product, setProduct] = useState(data);
    const dispatch = useDispatch();
    function clickAdd() {
        dispatch(addCart(product));
    }

    return (
        <MDBCol style={{maxWidth: "22rem"}}>
            <MDBCard>
                <MDBCardImage className="img-fluid"
                              src={product.img}
                              waves/>
                <MDBCardBody>
                    <MDBCardTitle>{product.name}</MDBCardTitle>
                    <MDBCardText>{product.des}</MDBCardText>
                    <MDBBtn onClick={clickAdd}>{product.price}</MDBBtn>
                    <Link to={`/product/${product.id}`}>
                        <MDBBtn  className={"rounded-pill"}>Xem chi tiết</MDBBtn>
                    </Link>

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Product;