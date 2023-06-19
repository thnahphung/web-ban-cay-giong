import {

    MDBMedia,


} from "mdbreact";
const Comment = (data) => {
    const comment = data.comment;
    return (
        <MDBMedia key={comment.id} className="d-block d-md-flex mt-2 ">
            <img
                className="card-img-64 rounded-circle d-flex mx-auto mb-3"
                src={comment.user.avatar}
                alt=""
            />
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                <h5 className="font-weight-bold text-default mt-0">
                    {comment.user.name}
                </h5>
                {comment.content}
            </MDBMedia>
        </MDBMedia>
    );
};
export default Comment;