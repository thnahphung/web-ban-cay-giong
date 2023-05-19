import React from "react";
import { MDBContainer, MDBStepper, MDBStep, MDBIcon } from "mdbreact";

const Step = () => {
    return (
        <MDBContainer>
            <MDBStepper>
                <MDBStep className="completed">
                    <a href="src/Component#!">
                        <span className="circle">1</span>
                        <span className="label">First step</span>
                    </a>
                </MDBStep>
                <MDBStep className="active">
                    <a href="src/Component#!">
                        <span className="circle">2</span>
                        <span className="label">Second step</span>
                    </a>
                </MDBStep>
                <MDBStep className="warning">
                    <a href="src/Component#!">
            <span className="circle">
              <MDBIcon icon="exclamation-triangle" />
            </span>
                        <span className="label">Third step</span>
                    </a>
                </MDBStep>
            </MDBStepper>
        </MDBContainer>
    );
}

export default Step;