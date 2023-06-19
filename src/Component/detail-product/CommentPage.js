import React, { useState, useEffect, useRef } from "react";
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
import CommentApi from "../../api/CommentApi";

const CommentPage = (data) => {
    const rateRef = useRef();
    const product = data.product;
    const [listComment, setListComment] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [content, setContent] = useState("");
    useEffect(() => {
        const fetchComments = async () => {
            const param = {
                productId: product.id,
                _page: 1,
                _limit: 3
            }
            const data = await CommentApi.getAll(param);
            setListComment(data.data);
            setCountPage(data.totalCount);
            console.log(data);
        }
        fetchComments().catch(console.error);
    }, [])
    function handleSubmit() {
        const user = JSON.parse(sessionStorage.getItem("user"));
        console.log(user.id);
        const fetchComments = async () => {
            const param = {
                "user": {
                    "id": user.id,
                    "name": user.name,
                    "avatar": user.avatar
                },
                "content": content.value,
                "rate": rateRef.current.getRating(),
                "productId": product.id
            }
            const data = await CommentApi.add(param);
            let copyComments = listComment.concat();
            copyComments.unshift(data);
            setListComment(copyComments)
            console.log(data);
        }
        fetchComments().catch(console.error);
    }


    return (
        <MDBContainer className="mt-5">
            <MDBCardHeader className="border-0 font-weight-normal">
                <p className=" mb-0 py-2 text-uppercase"> đánh giá sản phẩm</p>
            </MDBCardHeader>
            <div className="m-5">
                {listComment.map(comment => (<Comment comment={comment} key={comment.id} />))}
            </div>
            <div className="d-flex">
                <h5><strong className="text-nowrap t-1">Chất lượng sản phẩm</strong></h5>
                <RatingComment ref={rateRef} />
            </div>

            <div className="form-group ">
                <MDBInput type="textarea" label="Đánh giá" rows="2" inputRef={setContent} />
                <div className="text-center px-6 py-3">
                    <MDBBtn rounded size="xl" onClick={handleSubmit}>
                        Đánh giá
                    </MDBBtn>
                </div>
            </div>
            <Pagination countPage={countPage} />
        </MDBContainer>
    );
};

export default CommentPage;