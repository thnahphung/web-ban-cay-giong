import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer, MDBMask, MDBRow, MDBCol, MDBCardImage
} from "mdbreact";

const Image = (data) => {

    const listImage = data.listImage;

    function createImage() {
        let arr = [];
        for (let i = 0; i < listImage.length; i++) {
            arr.push(
                <MDBCarouselItem itemId={i + 1}>
                    <MDBView>
                        <img
                            style={{ height: '500px' }}
                            className="d-block"
                            src={listImage[i]}
                            alt="First slide"
                        />
                    </MDBView>
                </MDBCarouselItem>
            );
        }
        return arr;
    }
    function createSubImage() {
        let arr = [];
        for (let i = 0; i < listImage.length; i++) {
            arr.push(
                <MDBCol size="1.5">
                    <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src={listImage[i]}
                        alt='Card cap'
                        style={{ objectFit: 'cover', height: '100px', width: '110px' }}
                    />
                </MDBCol>
            );
        }
        return arr;
    }

    return (
        <MDBContainer style={{ width: '650px' }} className="d-flex flex-column ">
            <MDBCarousel activeItem={1} length={listImage.length} showControls={true} showIndicators={true} className="z-depth-1 w-100"
                style={{ height: '500px' }}>
                <MDBCarouselInner>
                    {createImage()}
                </MDBCarouselInner>
            </MDBCarousel>
            <div className="d-flex ">
                <MDBRow className={'d-flex w-100 justify-content-center gap-2'} style={{ marginTop: '15px' }}>
                    {createSubImage()}

                </MDBRow></div>
        </MDBContainer>
    )
}

export default Image;