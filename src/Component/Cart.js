import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import ProductList from "./ProductList";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <ProductList data={cart}></ProductList>

        </Fragment>)

}

export default Cart;