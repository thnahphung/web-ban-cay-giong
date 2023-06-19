import {

    MDBContainer, MDBBtn

} from "mdbreact";
import FavouriteProductList from "../Component/FavouriteProductList";
import { useDispatch } from "react-redux";
import { resetFavouriteProducts } from "../store/Action";
import { Link } from "react-router-dom";

const FavouriteProductPage = () => {
    const dispatch = useDispatch();
    function handleReset() {
        dispatch(resetFavouriteProducts());
    }
    return (
        <MDBContainer>
            <h1 className="text-center font-weight-bolder text-uppercase my-5">Sản phẩm yêu thích</h1>
            <FavouriteProductList />
            <div className="w-100 h-5 bg-dark"></div>
            <div className="d-flex w-full justify-content-between">
                <MDBBtn rounded onClick={handleReset}>Xoá tất cả</MDBBtn>
                <Link to={'/san-pham'}> <MDBBtn rounded>Tiếp tục mua hàng</MDBBtn></Link>
            </div>


        </MDBContainer>
    );
}
export default FavouriteProductPage;