
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavLink,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";

class DemoNavbar extends React.Component {
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
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("../../../assets/img/brand/argon-react-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("../../../assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                 
                 
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                  <div className="btn-wrapper">
                       
                       
                       
                       
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          type="button"
                          onClick={() => this.toggleModal("defaultModal")}>
                  <span className="btn-inner--text">Sign up</span>

                        </Button>
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
  <Link to="/addClub">
                <img
                  alt="..."
                  height="150"
                  src={require("../../../assets/img/brand/Bus.png")}
                /><h2 className="modal-title text-info">   &nbsp;&nbsp;&nbsp;CLUB</h2>
  </Link>
  
    </Col>
    <Col>
    <Link to="/createProfil">
                <img
                  alt="..."
                  height="150"
                  src={require("../../../assets/img/brand/im.png")}
                /><h2 className="modal-title text-info" >  &nbsp;&nbsp; USERS</h2>
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
                        >
                          
                          <span className="btn-inner--text">
                            Sign in
                          </span>
                        </Button>
                      </div>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
