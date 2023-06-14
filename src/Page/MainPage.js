import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from "mdbreact";
import CardProduct from "../Component/CardProduct";
import SliderProduct from "../Component/SliderProduct";
const MainPage = () =>{
        return (
            <MDBContainer>
               <SliderProduct/>
                <SliderProduct/>
            </MDBContainer>
        );
}
export default MainPage;