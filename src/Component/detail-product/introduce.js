import React from 'react';
import { MDBTypography, MDBBox } from 'mdbreact';

const Introduce = () => (
    <div className={'flex-1'}>
        <MDBTypography tag='h5'>
            <MDBBox tag='u'>Cây Giống Rau Bò Khai</MDBBox>
        </MDBTypography>
        <MDBBox tag='p' className='lead'>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Duis mollis, est non commodo luctus.
        </MDBBox>

        <br />
        <MDBTypography tag='h5'>
            <MDBBox tag='u'>Regular paragraph</MDBBox>
        </MDBTypography>
        <MDBBox tag='p'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur
            sit voluptatem molestias ad neque veritatis! Alias natus, nobis
            laudantium, veritatis, atque illum ipsam nisi voluptas nesciunt harum
            laborum perspiciatis!
        </MDBBox>
    </div>
);

export default Introduce;