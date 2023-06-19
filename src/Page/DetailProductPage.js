import Image from "../Component/detail-product/image";
import Introduce from "../Component/detail-product/introduce";
import { MDBContainer } from "mdbreact";
import Footer from "../Component/Footer";
import AddressBook from "../Component/detail-product/address-book";
import SameProduct from "../Component/detail-product/same-product";

const DetailProductPage = () => {
    return (
        <div style={{ fontFamily: 'Quicksand' }}>
            <AddressBook />
            <MDBContainer>
                <div className={'d-flex justify-content-around'}>
                    <Image />
                    <Introduce />
                </div>
                <SameProduct />
            </MDBContainer>
            <Footer />
        </div>
    )
}
export default DetailProductPage;