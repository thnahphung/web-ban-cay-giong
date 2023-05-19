import React from 'react';
import {MDBIcon, MDBInput} from 'mdbreact';

const Address = () => {
    return (
        <div style={{width: '625px', height: '550px'}}>
            <div>
                <div className={'d-flex'}>
                    <MDBIcon icon="map-marker-alt" size={"lg"} className={'m-2'}/>
                    <h3>Địa chỉ</h3>
                </div>
                <div>
                    <div style={{borderBottom: '1px dashed black', marginBottom: '10px'}}>

                        <MDBInput
                            label='Thanh Quân'
                            filled
                            type='checkbox'
                            id='checkbox1'
                            containerClass='mr-5'
                        >
                            <p>112 Thôn 1, xã Cư Suê, huyện Cưmgar, tỉnh Đăk Lăk</p>
                        </MDBInput>
                    </div>
                    <div style={{borderBottom: '1px dashed black', marginBottom: '10px'}}>

                        <MDBInput
                            label='Thanh Quân'
                            filled
                            type='checkbox'
                            id='checkbox212'
                            containerClass='mr-5'
                        >
                            <p>112 Thôn 1, xã Cư Suê, huyện Cưmgar, tỉnh Đăk Lăk</p>
                        </MDBInput>
                    </div>
                    <div style={{borderBottom: '1px dashed black', marginBottom: '10px'}}>

                        <MDBInput
                            label='Thanh Quân'
                            filled
                            type='checkbox'
                            id='checkbox2'
                            containerClass='mr-5'
                        >
                            <p>112 Thôn 1, xã Cư Suê, huyện Cưmgar, tỉnh Đăk Lăk</p>
                        </MDBInput>
                    </div>

                </div>
            </div>
            <div>
                <div className={'d-flex'}>
                    <MDBIcon icon="shipping-fast" size={"lg"} className={'m-2'}/>
                    <h3>Hình thức giao hàng</h3>
                </div>
                <div style={{borderBottom: '1px dashed black', marginBottom: '10px'}}>

                    <MDBInput
                        label='Thanh Quân'
                        filled
                        type='checkbox'
                        id='checkbox8'
                        containerClass='mr-5'
                    >
                        <p>112 Thôn 1, xã Cư Suê, huyện Cưmgar, tỉnh Đăk Lăk</p>
                    </MDBInput>
                </div>
                <div style={{borderBottom: '1px dashed black', marginBottom: '10px'}}>

                    <MDBInput
                        label='Thanh Quân'
                        filled
                        type='checkbox'
                        id='checkbox6'
                        containerClass='mr-5'
                    >
                        <p>112 Thôn 1, xã Cư Suê, huyện Cưmgar, tỉnh Đăk Lăk</p>
                    </MDBInput>
                </div>
                <div style={{borderBottom: '1px dashed black', marginBottom: '10px'}}>

                    <MDBInput
                        label='Thanh Quân'
                        filled
                        type='checkbox'
                        id='checkbox7'
                        containerClass='mr-5'
                    >
                        <p>112 Thôn 1, xã Cư Suê, huyện Cưmgar, tỉnh Đăk Lăk</p>
                    </MDBInput>
                </div>

            </div>
        </div>
    );
};

export default Address;