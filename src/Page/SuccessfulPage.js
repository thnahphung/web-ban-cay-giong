import { useLocation } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import {MDBContainer} from "mdbreact";

const SuccessfulPage = () => {
    const location = useLocation();
    if (location.state === null) {
        return (<PageNotFound />)
    }
    const orderId = location.state.orderId;


    return (<MDBContainer>
        <h2 style={{textAlign: 'center'}}><strong>Thanh toán thành công!</strong></h2>
        <h4 style={{textAlign: 'center'}}>Mã đơn hàng của bạn là #{orderId}</h4>
    </MDBContainer>)
}
export default SuccessfulPage;