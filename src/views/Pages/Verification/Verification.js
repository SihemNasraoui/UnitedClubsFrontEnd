import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

class Verification extends Component {
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
                      <h1>Validate your account</h1>
                      <InputGroup className="mb-3">
                       
                       
                        <Input type="text" placeholder="Enter the code" autoComplete="email" />
                      </InputGroup>
                    
                      <Row>
                        <Col xs="6"  className="text-right"> 
                          <Button color="primary" className="px-4">Validate</Button>
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

export default Verification;
