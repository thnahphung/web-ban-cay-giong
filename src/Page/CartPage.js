import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import ProductList from "../Component/ProductList";
import CartTable from "../Component/CartTable";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Bill from "../Component/Bill";


const CartPage = () => {
    const cart = useSelector(state => state.cart);
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md={8}>
                    <CartTable/>
                </MDBCol>
                <MDBCol md={4}>
                    <Bill/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default CartPage;