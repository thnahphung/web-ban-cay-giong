import {

    MDBMedia,


} from "mdbreact";
import Rating from "../Rating";

const Comment = (data) => {
    const comment = data.comment;
    return (
        <>
            <MDBMedia key={comment.id} className="d-block d-md-flex mt-2 ">
                <img
                    className="card-img-64 rounded-circle d-flex mx-auto mb-3"
                    src={comment.user.avatar}
                    alt=""
                />
                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                    <div >
                        <h5 className="font-weight-bold text-default mt-0 mr-2">
                            {comment.user.name}
                        </h5>
                        <Rating rate={comment.rate}/>
                        <h6 style={{fontSize: '13px'}}>{convertDate(comment.updatedAt)}</h6>
                    </div>
                    <h6>{comment.content}</h6>
                </MDBMedia>
            </MDBMedia>
            <hr/>
        </>
    );
};
export default Comment;

function convertDate(numberDate) {
    const date = new Date(numberDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return day + '/' + month + '/' + year;
}