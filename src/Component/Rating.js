import { MDBIcon, MDBRating } from "mdbreact";
import { useState } from "react";

const Rating = (data) => {
    const [rateNumber, setRateNumber] = useState(data.rate);

    const listStar = []

    for (let i = 0; i < 5; i++) {
        if (i < rateNumber)
            listStar.push(<MDBIcon key={i} icon="star" className='orange-text ml-1' />)
        else listStar.push(<MDBIcon key={i} icon="star" className='grey-text ml-1' />)
    }

    return (
        <div className='flex-row '>
            {listStar}
        </div>

    );
}

export default Rating