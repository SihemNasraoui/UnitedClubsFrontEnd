import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


class RegisterSponsor extends Component {

  constructor(props) {
    super(props)

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        Nom_Sponsor: '',
        Email_Sponsor: '',
        Téléphone_Sponsor: '',
        Adresse_Sponsor: '',
        Mot_de_passe_Sponsor: '',
        Image: '', 
     
    }
}

onSubmit(u) {
  u.preventDefault()

  var user = {
      Nom_Sponsor: this.state.firstname,
      Email_Sponsor: this.state.email,
      Téléphone_Sponsor: this.state.phone,
      Adresse_Sponsor: this.state.adresse,      
      Mot_de_passe_Sponsor: this.state.password,  
      Image: this.state.logo,
  };


  axios.post('http://localhost:4000/Sponsor', user)
  .then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });

   this.setState({ Nom_Sponsor: '', Email_Sponsor: '', Téléphone_Sponsor: '', Adresse_Sponsor: '', Mot_de_passe_Sponsor: '', Image: '' })
 }
  


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <br/><br/><br/><br/><br/>
                  <Form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.firstname} placeholder="Firstname" autoComplete="Firstname" />
                    </InputGroup>




                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" value={this.state.email} placeholder="Email" autoComplete="email" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"  value={this.state.password} placeholder="Password" autoComplete="new-password" />                       <Input type="password" placeholder="Repeat password" autoComplete="new-password" />

                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" value={this.state.phone} placeholder="Phone" autoComplete="Phone" /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"  value={this.state.adresse} placeholder="Address" autoComplete="Address" />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" value={this.state.logo} id="avatar" name="avatar" accept="image/png, image/jpeg" />
                    </InputGroup>


                    <Button type="submit" color="info" block>Create Account</Button>
                  </Form>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RegisterSponsor;
