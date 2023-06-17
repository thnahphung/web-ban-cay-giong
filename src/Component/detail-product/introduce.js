import React from 'react';
import { MDBTypography, MDBBox, MDBBtn, MDBInput, MDBContainer } from 'mdbreact';
import Rating from '../Rating';

const Introduce = () => (
    <MDBContainer className={'flex-1 '}>
        <MDBTypography tag='h2'>
            <strong className='text-uppercase text-nowrap'>Cây Giống Rau Bò Khai</strong>
        </MDBTypography>
        <Rating />

        <br />
        <p className='font-weight-normal h2'> 10.000đ</p>
        <div className="repeat-x" >
            {[...Array(35)].map((_, index) => (
                <img
                    style={{ width: "15px" }}
                    key={index}
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/bg_divider.png"
                    alt="Background Divider"
                />
            ))}
        </div>
        <div className='d-flex justify-content-between align-items-center' style={{ width: "500px" }}>

            <span className='font-weight-normal text-uppercase'> số lượng</span>
            <MDBInput
                type="number"
                valueDefault={1}
                className="form-control text-center"
                style={{ width: "60px" }}
                min={1}
                max={10}
            />
            <MDBBtn>Thêm vào giỏ hàng
            </MDBBtn>
            {/* <h1><i class="fas fa-heart" ></i></h1> */}
            <h1> <i className="far fa-heart cursor-pointer"></i></h1>
        </div>



    </MDBContainer>
);

export default Introduce;