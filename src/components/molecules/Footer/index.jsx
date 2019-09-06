//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
} from 'mdbreact';

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="agency-red" className="font-small pt-4 mt-4">
                <MDBContainer className="text-center">
                    <MDBRow>
                    <MDBCol md="12">
                        <h5 className="title">Advertisement Agency Christian Aichner</h5>
                        <p>
                        We provide excellent services and projects to improve the image 
                        and online-presence of our satisfied customers.
                        </p>
                        <MDBBtn
                        className="text-dark mb-4"
                        href="https://www.aichner-christian.com"
                        color="white"
                        size="md">
                        More about us
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: 
                        <a
                        href="https://www.aichner-christian.com"
                        target="_blank"
                        rel="noopener noreferrer"> Werbeagentur Christian Aichner</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
