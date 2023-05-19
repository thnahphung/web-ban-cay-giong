import {
    MDBBtn,
    MDBCard, MDBCardBody,
    MDBCardImage, MDBCardText, MDBCardTitle,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";
import CardProduct from "./CardProduct";

const SliderProduct=() =>{
    return (
        <MDBContainer>
            <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                            <MDBCol md="3">
                                <CardProduct/>
                            </MDBCol>
                        </MDBCarouselItem>
                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}
export default SliderProduct;