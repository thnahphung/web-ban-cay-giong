import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Bill from "../Component/Bill";
import FormInputInfoUser from "../Component/FormInputInfoUser";
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import OrderApi from "../api/OrderApi";
import {cartTotal} from "../store/SupportFuntion";
import {resetCart} from "../store/Action";
import {useNavigate} from "react-router-dom";

const PaymentPage = () => {
    const cart = useSelector(state => state.cart);
    const formRef = useRef();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleValidation() {
        const valid = formRef.current.validateForm();
        if (valid !== true)
            return;

        setLoading(true);
        const information = formRef.current.getInfo();
        const order = {
            "phone": information.phone,
            "total": cartTotal(cart) + 30000,
            "information": information,
            "items": cart
        }
        const fetchNews = async () => {
            const data = await OrderApi.add(order);
            dispatch(resetCart());
            setLoading(false);
            if (loading === false) {
                navigate('/thanh-toan-thanh-cong', {
                    replace: true,
                    state: {
                        orderId : data.id
                    }
                });
            }
        }
        fetchNews().catch(console.error);
    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md={`8`}>
                    <h2><strong className={`flex-center`}>Thông tin của bạn</strong></h2>
                    <FormInputInfoUser ref={formRef} loading={loading}/>
                    <div className={`d-flex justify-content-center`}>
                        <MDBBtn rounded color="default" className={`w-50`} onClick={handleValidation}>
                            Đặt hàng
                        </MDBBtn>
                    </div>
                </MDBCol>
                <MDBCol md={`4`} className={`mt-2`}>
                    <Bill link={'/thanh-toan/ket-thuc'} label={'Thanh toán'} disableBtn={true} fee={true}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default PaymentPage;