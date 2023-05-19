import {useDispatch, useSelector} from "react-redux";
import React, {Fragment, useEffect} from "react";
import ProductList from "../Component/ProductList";
import {loadProduct} from "../store/Action";
import {products as p} from "../Data/ProductData";
import {MDBBtn, MDBSideNavLink} from "mdbreact";
import {Link, NavLink} from "react-router-dom";


const ListProductPage = () => {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProduct(p));
    })
    if(products.length===0){
        return (<h1>Loading...</h1>)
    }
    return (
        <Fragment>
            <h2>Số sản phẩm trong giỏ hàng: {cart.length}</h2>
            <Link to={`/cart`}>
                <MDBBtn>Xem giỏ hàng</MDBBtn>
            </Link>
            <ProductList products={products}></ProductList>
        </Fragment>)
}

export default ListProductPage;