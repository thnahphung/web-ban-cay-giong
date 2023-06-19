import React from "react";
import {MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer} from "mdbreact";
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <MDBContainer className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Trang bạn tìm có vẻ không chính xác
            </h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                Hãy thử các trang khác của chúng tôi bên dưới nhé
            </p>

            <MDBRow>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="bullhorn" size="2x" className="blue-text"/>
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Trang chủ</h4>
                            <p className="grey-text">
                                Đi đến trang chủ để được xem các sản phẩm được yêu thích nhất của chúng tôi.
                            </p>
                            <Link to={'/'}>
                                <MDBBtn color="default" rounded>
                                    Trang chủ
                                </MDBBtn>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="cogs" size="2x" className="pink-text"/>
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Sản phẩm</h4>
                            <p className="grey-text">
                                Đến đây để xem danh sách các cây trồng mà chúng tôi hiện đang bán.
                            </p>
                            <Link to={'/san-pham'}>
                                <MDBBtn color="default" rounded>
                                    Sản phẩm
                                </MDBBtn>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="tachometer-alt" size="2x" className="purple-text"/>
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Tin tức</h4>
                            <p className="grey-text">
                                Xem các tin tức mới và các hướng dẫn cách trồng cây hiệu quả.
                            </p>
                            <Link to={'/tin-tuc'}>
                                <MDBBtn color="default" rounded>
                                    Tin tức
                                </MDBBtn>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default PageNotFound;