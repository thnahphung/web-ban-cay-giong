import {

    MDBIcon,
    MDBMedia,


} from "mdbreact";
const Comment = () => {
    return (
        <MDBMedia className="d-block d-md-flex mt-2 ">
            <img
                className="card-img-64 rounded-circle d-flex mx-auto mb-3"
                src="https://mdbootstrap.com/img/Photos/Avatars/img (30).webp"
                alt=""
            />
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                <h5 className="font-weight-bold text-default mt-0">
                    Caroline Horwitz
                </h5>
                Cây đẹp và lớn nhanh
            </MDBMedia>
        </MDBMedia>
    );
};
export default Comment;