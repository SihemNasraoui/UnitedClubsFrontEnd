import React from "react";
import "./vendor/nucleo/css/nucleo.css";
import "./vendor/font-awesome/css/font-awesome.min.css";
import "./scss/argon-design-system-react.scss";
import DemoNavbar from "./DemoNavbar.js"
import Carousel from "./Carousel.js";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
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
                  className="btn-neutral btn-icon-only btn-round"
                  color="twitter"
                  href="https://twitter.com/creativetim"
                  id="tooltip475038074"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip837440414"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
      
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/creativetimofficial"
                  id="tooltip495507257"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href=""
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
class Acceuil extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <><DemoNavbar />
        <main ref="main">
        <Carousel />

        <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3 text-info">
Event planning and management Simplified</h2>
                  <p className="lead text-muted">
                   
United Clubs gives you a powerful set of tools to succeed in your events
 and impact your 
attendees. Sounds too good to be true? <br/>See how it works
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <img alt="..." class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("../../../assets/img/brand/secon.png")} />
                          <h6 className="text-primary text-uppercase">
                            
Login and create your profile
                          </h6>
                  
                          </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img alt="..." class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("../../../assets/img/brand/rr.png")} />
                          <h6 className="text-success text-uppercase">
                          Launch the event
                          </h6>   
                          </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <img alt="..." class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("../../../assets/img/brand/ev.png")} />
                          <h6 className="text-warning text-uppercase Warning
">
         <br/>
<br/>
Let the magic operate
<br/>

                          </h6>
                     
                          
                          </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Container>
          </section>




          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../../assets/img/brand/plan.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                   
                    <h1 className="text-warning ">OPTIMAL COLLABORATION</h1>
                    <h3>Discover a simple way to manage your event</h3>
                  
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="danger"
                            >
                              <i className="fa fa-check" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-danger ">
                           Powerful
                            </h6>
                            
                          </div>
                      
                        </div>
                        <p> We have digitized event logistics to help you focus on
 creating impactful experiences for your participants.</p>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-check" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-success ">Flexible</h6>
                          </div>
                        </div>
                        <p>
We have been at your place and, consequently, we have developed an event 
technology that is perfectly adapted to your needs.</p>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="fa fa-check" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-warning  ">
                              
Effortlessly
                            </h6>
                          </div>
                        </div>
                        <p>
We ensure peace of mind and low stress by turning 
event planning into a fast and seamless process.</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
         
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("../../../assets/img/brand/event.png")}
                      top
                    />
                   
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    
                    <h3>

                    TYPES OF EVENTS</h3>
                    <p className="lead">
                     
United Clubs adapts to different types of events :
                    </p>
                    
                   <h4>Conference</h4>
                   <h4>Congress</h4>
                   <h4>Networking</h4>
                   <h4>Challenges</h4>
                   <h4>Hackathon</h4>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
         
  
 
        </main>
        <CardsFooter />
      </>
    );
  }
}
export default Acceuil;
