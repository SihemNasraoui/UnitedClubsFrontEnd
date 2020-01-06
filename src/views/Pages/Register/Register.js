import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Universite from './Univ';
import axios from 'axios';

class Register extends Component {

  constructor(props) {
    super(props)

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        firstname: '',
        lastname: '',
        pseudo: '',
        cin: '',
        email: '',
        password: '',
        phone:'',
        adresse: '',
        date: '',
        gender: '',
        role: '',  
        logo: '',  
     
    }
}

onSubmit(u) {
  u.preventDefault()

  var user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      pseudo: this.state.pseudo,
      cin: this.state.cin,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      adresse: this.state.adresse,
      date: this.state.date,
      gender: this.state.gender,
      role: this.state.role,
      logo: this.setState.logo,
     
    
  };

 
  axios.post('http://localhost:4000/etab/create', user)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });

  this.setState({ firstname: '', lasttname: '', pseudo: '', cin: '', email: '', password: '', phone: '', adresse: '',  date: '',  gender: '', role: '', logo: '', })
}


  onchangeselectspons = (x) => {
    let choix = document.getElementById('selectspons').value;
    var entreprisediv = document.getElementById('entreprisediv');

    if (choix === "Personnel") {
      entreprisediv.style.display = "none";
      entreprisediv.style.height = "0";
    } else {
      if (entreprisediv.style.display === "") {
        //Hidden entreprisediv
        entreprisediv.style.display = "none";
        entreprisediv.style.height = "0";
      } else {
        //Show entreprisediv
        entreprisediv.style.display = "";
        entreprisediv.style.height = "auto";
      }
    }
  }

  onchangeselect = (e) => {
    let choix = document.getElementById('select').value;
    var studentdiv = document.getElementById('Studentdiv');
    var sponsdiv = document.getElementById('sponsdiv');
    var adminsdiv = document.getElementById('adminsdiv');
    var universitydiv = document.getElementById('universitydiv');


    if (choix === "Student") {
      if (studentdiv.style.display === "") {
        //Hidden studentdiv
        studentdiv.style.display = "none";
        studentdiv.style.height = "0";			// Optionnel rétablir la hauteur

        universitydiv.style.display = "none";
        universitydiv.style.height = "0";
      }
      else {
        //Hidden sponsdiv
        sponsdiv.style.display = "none";
        sponsdiv.style.height = "0";
        //Hidden adminsdiv
        adminsdiv.style.display = "none";
        adminsdiv.style.height = "0";
        //Show studentdiv
        studentdiv.style.display = "";
        studentdiv.style.height = "auto";			// Optionnel libérer l'espace

        universitydiv.style.display = "";
        universitydiv.style.height = "auto";
      }


    } else if (choix === "Sponsor") {
      if (sponsdiv.style.display === "") {
        //Hidden sponsdiv
        sponsdiv.style.display = "none";
        sponsdiv.style.height = "0";			// Optionnel rétablir la hauteur
      }
      else {
        //Hidden studentdiv
        studentdiv.style.display = "none";
        studentdiv.style.height = "0";
        //Hidden adminsdiv
        adminsdiv.style.display = "none";
        adminsdiv.style.height = "0";
        //Show sponsdiv
        sponsdiv.style.display = "";
        sponsdiv.style.height = "auto";			// Optionnel libérer l'espace
        universitydiv.style.display = "none";
        universitydiv.style.height = "0";
      }

    } else {
      if (adminsdiv.style.display === "") {
        //Hidden adminsdiv
        adminsdiv.style.display = "none";
        adminsdiv.style.height = "0";			// Optionnel rétablir la hauteur

        universitydiv.style.display = "none";
        universitydiv.style.height = "0";
      }
      else {
        //Hidden studentdiv
        studentdiv.style.display = "none";
        studentdiv.style.height = "0";
        //Hidden sponsdiv
        sponsdiv.style.display = "none";
        sponsdiv.style.height = "0";
        //Show adminsdiv
        adminsdiv.style.display = "";
        adminsdiv.style.height = "auto";			// Optionnel libérer l'espace

        universitydiv.style.display = "";
        universitydiv.style.height = "auto";
      }
    }
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
                  <Form onSubmit={onsubmit()}>
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
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.pseudo} placeholder="Pseudo" autoComplete="Pseudo" />
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
                      <input type="checkbox" value={this.state.gender} name="sexe" value="male" />  Male  <br />
                      <input type="checkbox" value={this.state.gender} name="sexe" value="female" />   Female<br />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-people"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" value={this.state.role} name="userrole" id="select" onChange={this.onchangeselect.bind(this)}>
                        <option disabled selected>Select your role </option>
                        <option value="Student">Student</option>
                        <option value="Sponsor">Sponsor</option>
                        <option value="Administration">Administration</option>
                      </Input>
                    </InputGroup>


              <Universite />
                    


              <div id="Studentdiv" style={{ display: 'none' }} >
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.level} placeholder="Level" autoComplete="Level" /><Input type="text" placeholder="Inscription Number" autoComplete="Inscription Number" />
                      </InputGroup>

                    </div>

                    <div id="sponsdiv" style={{ display: 'none' }} >
                      <InputGroup>
                        <Input type="select" value={this.state.typesponsor} name="sponstype" id="selectspons" onChange={this.onchangeselectspons.bind(this)}>
                          <option value="Personnel">Personnel</option>
                          <option value="Entreprise">Entreprise</option>
                        </Input>
                      </InputGroup>
                    </div>

                    <div id="entreprisediv" style={{ display: 'none' }} >
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.entreprisename} placeholder="Entreprise Name" autoComplete="Entreprise Name" /><Input type="text" value={this.state.matricule} placeholder="Matricule" autoComplete="Matricule" />
                      </InputGroup>


                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.function} placeholder="Function" autoComplete="Function" />
                      </InputGroup>
                    </div>




                    <div id="adminsdiv" style={{ display: 'none' }} >
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.departement} placeholder="Departement" autoComplete="Departement" /><Input type="text" value={this.state.fonction} placeholder="Fonction" autoComplete="Fonction" />
                      </InputGroup>

                    </div>





                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" value={this.state.logo} id="avatar" name="avatar" accept="image/png, image/jpeg" />
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

export default Register;
