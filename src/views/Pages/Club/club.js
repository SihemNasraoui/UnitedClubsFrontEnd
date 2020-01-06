import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Universite from './Univ';

import logo from '../../../assets/img/brand/logo.png'
import { AppNavbarBrand} from '@coreui/react';

class Club extends Component {



  render() {
    return (
      
      <div className="app flex-row align-items-center">
       
        <Container>
          <Row className="justify-content-center">
          
            <Col md="9" lg="7" xl="6">
                     <Card className="mx-4">
                <CardBody className="p-4">
                                   <AppNavbarBrand 
      full={{ src: logo, width: 145 , height: 130, alt: 'united Club'}}
    />
 
                  <Form>
                    <h2>REGISTER CLUB</h2>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" required placeholder="Clubname" autoComplete="Clubname" />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-id-card-o"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="textarea" required placeholder=" Description of the club" autoComplete=" Description of the club" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email"required placeholder="Email" autoComplete="email" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"required placeholder="Password" autoComplete="new-password" />                       <Input type="password" required placeholder="Repeat password" autoComplete="new-password" />

                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="phone"required placeholder="Phone" autoComplete="Phone" /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" required placeholder="Address" autoComplete="Address" />
                    </InputGroup>

                    <Universite />

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"> &nbsp;DATE OF CREATION</i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">

                        <InputGroupText>
                          <i className="icon-camera"> &nbsp; &nbsp;LOGO</i>
                        </InputGroupText>
                      </InputGroupAddon> <input requiered type="file" id="logo" name="logo" accept="image/png, image/jpeg" />
                    </InputGroup>


                    <Button color="info" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>Facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-danger mb-1" block><span>Gmail</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Club;
