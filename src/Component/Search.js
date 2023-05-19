import React from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon} from "mdbreact";
import logo from "../images/logo.png"
import BtnCart from "./BtnCart";

const Search = () => {
    return (
        <div style={{borderBottom: "#2bbbad solid 2px"}}>
            <MDBContainer>
                <div className={`d-flex `} style={{justifyContent: "space-between", alignItems: "center"}}>
                    <img src={logo} className="img-fluid ml-4" alt=""/>

                    <div className="input-group md-form form-sm form-1 pl-0 ml-5" style={{width: '500px'}}>
                        <input
                            className="form-control my-0 py-1"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <MDBBtn>
                            <MDBIcon className="text-white" icon="search"/>
                        </MDBBtn>
                    </div>
                    <BtnCart/>
                </div>
            </MDBContainer></div>
    );
};

export default Search