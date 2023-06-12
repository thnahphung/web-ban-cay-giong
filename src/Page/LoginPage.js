import {MDBBtn, MDBCard, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";

const LoginPage = () =>{
    return (
        <MDBContainer>
            <MDBRow className='flex-center mt-5' >
                <MDBCol md="6">
                  <MDBCard >  <form className='p-5'>
                        <p className="h1 text-center mb-4">ĐĂNG NHẬP</p>
                        <div>
                           <div className='d-flex flex-row justify-content-between' >
                            <div style={{width:"300px"}}>
                                <MDBInput
                                    className= 'align-self'
                                label="Nhập mail của bạn"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                />
                            </div>
                            <MDBBtn className= 'align-self-center' rounded color='default'>Nhận mã</MDBBtn>
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
                            <MDBBtn rounded color='default'>Đăng Nhập</MDBBtn>
                        </div>
                    </form>
                  </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default LoginPage;