import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer, MDBMask, MDBRow, MDBCol, MDBCardImage
} from "mdbreact";

const Image = () => {
    return (
        <MDBContainer style={{width: '650px'}}>
            <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1"
                         style={{width: '600px', height: '500px'}}>
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp"
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light"/>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong"/>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight"/>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <MDBRow className={'d-flex'} style={{width: '600px', marginLeft: '35px', marginTop: '15px'}}>
                <MDBCol size="1.5" style={{marginRight: '15px'}}>
                    <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.webp'
                        alt='Card cap'
                        style={{objectFit: 'cover', height: '100px', width: '120px'}}
                    />

                </MDBCol>
                <MDBCol size="1.5" style={{marginRight: '15px'}}>
                    <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.webp'
                        alt='Card cap'
                        style={{objectFit: 'cover', height: '100px', width: '120px'}}
                    />

                </MDBCol>
                <MDBCol size="1.5" style={{marginRight: '15px'}}>
                    <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.webp'
                        alt='Card cap'
                        style={{objectFit: 'cover', height: '100px', width: '120px'}}
                    />

                </MDBCol>
                <MDBCol size="1.5" style={{marginRight: '15px'}}>
                    <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.webp'
                        alt='Card cap'
                        style={{objectFit: 'cover', height: '100px', width: '120px'}}
                    />

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Image;