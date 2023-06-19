import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';

const RatingComment = forwardRef((prop, ref) => {
    let rating = 0;
    const [basic] = useState([
        {
            tooltip: 'Rất tệ'
        },
        {
            tooltip: 'Tệ'
        },
        {
            tooltip: 'Ổn',
        },
        {
            tooltip: 'Tốt'
        },
        {
            tooltip: 'Rất tốt'
        }
    ]);

    function getValue(value) {
        rating = value;
    }

    useImperativeHandle(ref, () => ({
        getRating() {
            return rating.value || 0;
        }
    }))

    return (
        <MDBContainer>
            <MDBRating data={basic} getValue={getValue} />
        </MDBContainer>
    );
});

export default RatingComment;