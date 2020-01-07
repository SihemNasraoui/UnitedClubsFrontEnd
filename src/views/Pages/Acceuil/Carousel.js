import React from "react";
import { Link } from "react-router-dom";

import {Modal} from "reactstrap";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../../../assets/img/brand/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../../../assets/img/brand/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },

  {
    src: require("../../../assets/img/brand/innovtech.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  state = {
    defaultModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                
Your event starts here.
University Event Management Platform                </h1>
                <p className="lead text-white mt-4">
                Create your digital profile to start seeing suggested events based on your interests. Your profile is private ,and you use it to discover and participate for events in one click.
                </p>
                <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                     
                          onClick={() => this.toggleModal("defaultModal")}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-user-plus" />
                          </span>
                          <span className="btn-inner--text">Sign up</span>
                        </Button>/

                        <Modal
              className="modal-dialog-centered "
           
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h1 className="modal-title text-info" id="modal-title-notification">
                  Your are ...
                </h1>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
              <Row>
    <Col>
  <Link to="club">
                <img
                  alt="..."
                  height="150"
                  src={require("../../../assets/img/brand/Bus.png")}
                /><h2 className="modal-title text-info">   &nbsp;&nbsp;&nbsp;CLUB</h2>
  </Link>
  
    </Col>
    <Col>
    <Link to="/register">
                <img
                  alt="..."
                  height="150"
                  src={require("../../../assets/img/brand/im.png")}
                /><h2 className="modal-title text-info" >  &nbsp;&nbsp; Student</h2>
  </Link>    </Col>
  
  <Col>
    <Link to="/createProfil">
                <img
                  alt="..."
                  height="150"
                  src={require("../../../assets/img/brand/im.png")}
                /><h2 className="modal-title text-info" >   Administration</h2>
  </Link>    </Col>
  <Col>
  <Link to="/createProfil">
                <img
                  alt="..."
                  height="150"
                  src={require("../../../assets/img/brand/im.png")}
                /><h2 className="modal-title text-info" >  &nbsp;&nbsp; Sponsor</h2>
  </Link>    </Col>
  
  
  </Row>
              </div>
              <div className="modal-footer">
              
                <Button
                  className="text-default ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
 




                        
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href=""
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-envelope" />
                          </span>
                          <span className="btn-inner--text">
                            Contact us
                          </span>
                        </Button>
                   
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
