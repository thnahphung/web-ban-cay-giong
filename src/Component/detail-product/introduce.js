import React, { useState } from 'react';
import { MDBTypography, MDBBox, MDBBtn, MDBInput, MDBContainer } from 'mdbreact';
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../store/Action';


const Introduce = (data) => {
    const product = data.product;
    const cart = useSelector(state => state.cart);
    const [amount, setAmount] = useState();

    const dispatch = useDispatch();

    function handleAdd(product) {
        let quantity = parseInt(amount.value);
        const item = cart.find(item => item.product.id === product.id);
        if (item === undefined)
            dispatch(addCart(product, quantity));
        else dispatch(addCart(product, item.amount + quantity));
    }
    return (

        <MDBContainer className={'flex-1 '}>
            <MDBTypography tag='h2'>
                <strong className='text-uppercase text-nowrap'>{product.name}</strong>
            </MDBTypography>
            <Rating rate={product.rate} />

            <br />

            {product.originPrice === product.salePrice ?

                <p className='font-weight-normal h2'> {product.originPrice.toLocaleString('en-US').replaceAll(',', '.')} VND</p>

                :
                <>
                    <div className='d-flex'>
                        <p className='font-weight-normal h2'> {product.originPrice.toLocaleString('en-US').replaceAll(',', '.')} VND</p>
                        <p className='font-weight-normal h2 ml-5'><del> {product.originPrice.toLocaleString('en-US').replaceAll(',', '.')} VND</del></p>
                    </div>
                </>
            }

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
                    inputRef={setAmount}
                />
                <MDBBtn onClick={() => handleAdd(product)}>Thêm vào giỏ hàng
                </MDBBtn>
                {/* <h1><i class="fas fa-heart" ></i></h1> */}
                <h1> <i className="far fa-heart cursor-pointer"></i></h1>
            </div>



        </MDBContainer>
    )

}

export default Introduce;