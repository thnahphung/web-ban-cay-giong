import {useLocation} from "react-router-dom";
import PageNotFound from "./PageNotFound";

const SuccessfulPage = () => {
    const location = useLocation();
    if (location.state === null) {
        return (<PageNotFound/>)
    }
    const orderId = location.state.orderId;


    return (<div>successfull Page {orderId}</div>)
}
export default SuccessfulPage;