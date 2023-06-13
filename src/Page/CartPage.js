import CartTable from "../Component/CartTable";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Bill from "../Component/Bill";


const CartPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md={`8`}>
                    <CartTable/>
                </MDBCol>
                <MDBCol md={`4`} className={`mt-2`}>
                    <Bill/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default CartPage;