import {
    MDBPageItem,
    MDBPagination,
    MDBPageNav,
} from 'mdbreact';
const Pagination = (data) => {
    const countPage = data.countPage;
    function createPagination(countPage) {
        let elements = [];
        for (let i = 1; i < countPage + 1; i++) {
            elements.push(
                <MDBPageItem active={1 === i} key={i}>
                    <MDBPageNav className="page-link">
                        {i}
                    </MDBPageNav>
                </MDBPageItem>);
        }
        return elements;
    }

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
            {createPagination(Math.ceil(countPage / 3))}
            <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav>Trang cuối</MDBPageNav>
            </MDBPageItem>
        </MDBPagination>);
};
export default Pagination;