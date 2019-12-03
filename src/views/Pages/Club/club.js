import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Forgetpassword extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Forget your password</h1>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-envelope"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Enter your email" autoComplete="email" />
                      </InputGroup>
                    
                      <Row>
                        <Col xs="6"  className="text-right"> 
                          <Button color="primary" className="px-4">Send it</Button>
                        </Col>
                        
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Forgetpassword;
