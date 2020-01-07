import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Universite from './Univ';
import axios from 'axios';


class RegisterStudent extends Component {

  constructor(props) {
    super(props)

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        cin: '',
        Nom_Etudiant: '',
        Prénom_Etudiant: '',
        Date_naissance: '',
        Email: '',
        Téléphone:'',
        Adresse_Etudiant: '',
        SexeU: '',
        Mot_de_passe: '',
        Num_Inscription: '',
        Niveau_universitaire: '',
        Nom_Ecole_Etudiant: '',
        Image: '',  
     
    }
}

onSubmit(u) {
  u.preventDefault()
  var user = {
      cin: this.state.cin,
      Nom_Etudiant: this.state.firstname,
      Prénom_Etudiant: this.state.lastname,
      Date_naissance: this.state.date,
      Email: this.state.email,
      Téléphone: this.state.phone,
      Adresse_Etudiant: this.state.adresse,
      SexeU: this.state.gender,
      Mot_de_passe: this.state.password,
      Num_Inscription: this.state.inscriptionnumber,
      Niveau_universitaire: this.state.level,
      Nom_Ecole_Etudiant: this.state.Nom_Ecole_Etudiant,
      Image: this.state.Image,   
  };

  axios.post('http://localhost:4000/Etudiant', user)
  .then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });

this.setState({ cin: '', Nom_Etudiant: '', Prénom_Etudiant: '', Date_naissance: '', Email: '', Téléphone: '', Adresse_Etudiant: '', SexeU: '', Mot_de_passe: '', Num_Inscription: '', Nom_Ecole_Etudiant: '', Image: '', })

 
  
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
                      <Input type="text" value={this.state.firstname} placeholder="Firstname" autoComplete="Firstname" /><Input type="text"  value={this.state.lastname} placeholder="Lastname" autoComplete="Lastname" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-id-card-o"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.cin} placeholder="Cin" autoComplete="Cin" />
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
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input value={this.state.data} type="date" />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-venus-mars"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <span>Gender  </span>
                      <input type="checkbox"  name="sexe" value="male" />  Male  <br />
                      <input type="checkbox"  name="sexe" value="female" />   Female<br />
                    </InputGroup>

                   


              <Universite />
                    


              
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.level} placeholder="Level" autoComplete="Level" /><Input type="text" value={this.state.inscriptionnumber} placeholder="Inscription Number" autoComplete="Inscription Number" />
                      </InputGroup>



                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" value={this.state.Image} id="avatar" name="avatar" accept="image/png, image/jpeg" />
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

export default RegisterStudent;
