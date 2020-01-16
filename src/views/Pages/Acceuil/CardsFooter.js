
import React from "react";
// reactstrap components
import {
  Button,

  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
        
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/"
                  id="tooltip837440414"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Follow us
                </UncontrolledTooltip>
      
                
              </Col>




              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.instagram.com/"
                  id="tooltip837440414"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-instagram-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
      
                
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    United Clubs
                  </a>
                  .
                </div>
              </Col>
        
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
