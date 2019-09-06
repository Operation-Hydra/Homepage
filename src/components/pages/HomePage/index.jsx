//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBView,
  MDBMask,
  MDBBtn,
} from 'mdbreact';

//> Images
// Logo of MDB React
import HydraLogo from '../../../assets/hydra_sm.png';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <MDBEdgeHeader color="agency-red" className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <MDBView>
                  <img
                    src={HydraLogo}
                    alt="mdbreact-logo"
                    className="m-auto logo"
                  />
                  <MDBMask />
                  </MDBView>
                  <MDBRow />
                  <p className="lead font-weight-bold">Where gods deploy.</p>
                  <p className="pb-4">
                    We are the hosting and deployment branch of the Advertisement Agency Christian Aichner.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1"
                      href="https://github.com/aichner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      <span className="font-weight-bold">Visit us on GitHub</span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4 text-center">
                <h2 className="my-5 font-weight-bold">
                  Looking for private hosting?
                </h2>
                <p className="lead mb-1">
                  We specialize in the hosting of closed-source projects on GitHub.
                </p>
                <p className="text-muted mb-1">
                  All of our Agency's client homepages are being hosted via GitHub.
                </p>
                <p className="text-muted my-3">
                <MDBRow className="flex-center">
                  <MDBCol md="3">
                    <MDBIcon icon="check" className="green-text pr-1" /> No need for Open-Source repositories
                  </MDBCol>
                  <MDBCol md="3" className="p-0">
                    <MDBIcon icon="check" className="green-text pl-3 pr-1" /> Cloud-based hosting on Microsoft servers
                  </MDBCol>
                  <MDBCol md="3" className="p-0">
                    <MDBIcon icon="check" className="green-text pl-3 pr-1" /> Great performance
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBIcon icon="check" className="green-text pl-3 pr-1" /> Very low down-time and failure rate
                  </MDBCol>
                </MDBRow>
                </p>
                <hr className="my-5" />
                <MDBBtn
                href="mailto:hydra@aichner-christian.com"
                size="lg"
                className="font-weight-bold"
                color="elegant"
                outline>
                  Request infos about hosting
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
