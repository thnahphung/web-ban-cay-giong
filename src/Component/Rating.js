import {MDBIcon, MDBRating} from "mdbreact";
import {useState} from "react";

const Rating = (data) => {
    const [rateNumber, setRateNumber] = useState(data.rate);

    console.log(rateNumber)

    const listStar = []

    for (let i = 0; i < 5; i++) {
        if (i < rateNumber)
            listStar.push(<MDBIcon icon="star" className='orange-text'/>)
        else listStar.push(<MDBIcon icon="star" className='grey-text'/>)
    }

    return (
        <div className='flex-row'>
            {listStar}
        </div>

    );
}

export default Rating