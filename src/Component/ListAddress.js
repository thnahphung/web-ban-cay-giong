import React, {forwardRef, useImperativeHandle, useState} from "react";
import {MDBContainer, MDBInput} from "mdbreact";

const ListAddress = forwardRef((data, ref) => {
    const listAddress = data.list;

    const [radio, setRadio] = useState();

    const onClick = (nr) => {
        setRadio(nr);
    };

    useImperativeHandle(ref, () => ({
            getAddressChecked() {
                return listAddress[radio];
            }
        }
    ))

    function createRadio() {
        let list = [];
        for (let i = 0; i < listAddress.length; i++) {
            list.push(
                <div>
                    <MDBInput
                        onClick={() => onClick(i)}
                        checked={radio === i}
                        label={listAddress[i].name}
                        type="radio"
                        id={`radio${i}`}
                        containerClass="mr-5"
                    />

                </div>
            )
        }
        return list;
    }

    return (
        <MDBContainer className="mt-5">
            {createRadio()}
        </MDBContainer>
    );

});

export default ListAddress;