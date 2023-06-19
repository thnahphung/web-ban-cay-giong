import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer
} from "mdbreact";

const CarouselPage = () => {
    return (
            <MDBCarousel
                activeItem={1}
                length={2}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://caygionggiare.vn/upload/photo/z2281636165925f9da9f1b515dfbd266f251d161ff1550-593.jpg"
                                alt="First slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://caygionggiare.vn/upload/photo/z2281636167104cb945538a86fd5bdeb6796e29a7f6124-2892.jpg"
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
    );
}

export default CarouselPage;