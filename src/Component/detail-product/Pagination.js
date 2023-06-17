import {
    MDBPageItem,
    MDBPagination,
    MDBPageNav,
} from 'mdbreact';
const Pagination = () => {
    return (
        <MDBPagination
            circle
            color="teal"
            className="d-flex justify-content-center mt-5"
        >
            <MDBPageItem disabled>
                <MDBPageNav>
                    <span>Trang đầu</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
                <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
                <MDBPageNav>
                    1 <span className="sr-only">(current)</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>2</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>3</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>4</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>5</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>Trang cuối</MDBPageNav>
            </MDBPageItem>
        </MDBPagination>);
};
export default Pagination;