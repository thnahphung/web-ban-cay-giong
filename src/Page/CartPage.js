import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import ProductList from "../Component/ProductList";


const CartPage = () => {
    const cart = useSelector(state => state.cart);
    return (
        <Fragment>
            <ProductList products={cart}></ProductList>
        </Fragment>)
}

export default CartPage;