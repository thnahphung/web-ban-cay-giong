import React, { useState } from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';

const RatingComment = () => {
    const [basic] = useState([
        {
            tooltip: 'Rất tệ'
        },
        {
            tooltip: 'Tệ'
        },
        {
            tooltip: 'Ổn',
            choosed: true
        },
        {
            tooltip: 'Tốt'
        },
        {
            tooltip: 'Rất tốt'
        }
    ]);

    return (
        <MDBContainer>
            <MDBRating data={basic} />
        </MDBContainer>
    );
};

export default RatingComment;