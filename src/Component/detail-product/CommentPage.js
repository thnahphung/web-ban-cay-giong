import React from "react";
import {
    MDBContainer,
    MDBInput,
    MDBCardHeader,
    MDBIcon,
    MDBMedia,
    MDBBtn,

} from "mdbreact";
import RatingComment from "./RatingComment";
import Pagination from "./Pagination";
import Comment from "./Comment";

const CommentPage = () => {
    return (
        <MDBContainer className="mt-5">
            <MDBCardHeader className="border-0 font-weight-normal">
                <p className=" mb-0 py-2 text-uppercase"> đánh giá sản phẩm</p>
            </MDBCardHeader>
            <div className="m-5">
                <Comment />
                <Comment />
            </div>
            <div className="d-flex">
                <h5><strong className="text-nowrap t-1">Chất lượng sản phẩm</strong></h5>
                <RatingComment />
            </div>

            <div className="form-group ">
                <MDBInput type="textarea" label="Đánh giá" rows="2" />
                <div className="text-center px-6 py-3">
                    <MDBBtn rounded size="xl">
                        Đánh giá
                    </MDBBtn>
                </div>
            </div>
            <Pagination />
        </MDBContainer>
    );
};

export default CommentPage;