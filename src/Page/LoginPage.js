import {MDBBtn, MDBCard, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import {useState} from "react";
import UserApi from "../api/UserApi";
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../store/Action";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState();

    function handleCode() {
        const fetchUsers = async () => {
            const params = {
                phone: phone.value
            }
            const data = await UserApi.getAll(params);

            if (data.length > 0){
                sessionStorage.setItem('user',JSON.stringify(data[0]));
                dispatch(loadUser(data[0]));
            }
        }
        fetchUsers().catch(console.error);
    }

    return (
        <MDBContainer>
            <MDBRow className='flex-center mt-5'>
                <MDBCol md="6">
                    <MDBCard>
                        <form className='p-5'>
                            <p className="h1 text-center mb-4">ĐĂNG NHẬP</p>
                            <div>
                                <div className='d-flex flex-row justify-content-between'>
                                    <div style={{width: "300px"}}>
                                        <MDBInput
                                            className='align-self'
                                            label="Nhập số điện thoại của bạn"
                                            icon="phone"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            inputRef={setPhone}
                                        />
                                    </div>
                                    <MDBBtn className='align-self-center' rounded color='default' >Nhận mã</MDBBtn>
                                </div>
                                <MDBInput
                                    label="Nhập mã xác nhận"
                                    icon="lock"
                                    group
                                    type="text"
                                    validate
                                />
                            </div>
                            <div className="text-center">
                                <Link to={'/trang-chu'}><MDBBtn rounded color='default' onClick={handleCode}>Đăng Nhập</MDBBtn></Link>
                            </div>
                        </form>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default LoginPage;