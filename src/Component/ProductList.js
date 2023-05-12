import React, {useEffect, useState} from 'react';
import {MDBCardGroup} from "mdbreact";
import {products as p} from "../Data/ProductData";
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import {loadProduct} from "../store/Action";

export default function ProductList(data) {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProduct(p));
    })

    return (
        <div>
            <h2>Số sản phẩm trong giỏ hàng: {cart.length}</h2>
            <MDBCardGroup>
                {products.map(product => (
                    <Product key={product.id} id={product.id} name={product.name} img={product.img} des={product.des}
                             price={product.price}></Product>
                ))}
            </MDBCardGroup>
        </div>

    )
}