import Image from "../Component/detail-product/image";
import Introduce from "../Component/detail-product/introduce";
import {MDBContainer} from "mdbreact";
import Footer from "../Component/footer";

const DetailProductPage = () => {
    return (
        <>
            <MDBContainer className={'d-flex justify-content-around'} style={{fontFamily: 'Quicksand'}}>
                <Image/>
                <Introduce/>
            </MDBContainer>
            <Footer/>
        </>
    )
}
export default DetailProductPage;