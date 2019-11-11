import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Register extends Component {

  onchangeselectspons = (x, y) => {
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

    if (choix === "Student") {
      if (studentdiv.style.display === "") {
        //Hidden studentdiv
        studentdiv.style.display = "none";
        studentdiv.style.height = "0";			// Optionnel rétablir la hauteur
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
      }

    } else {
      if (adminsdiv.style.display === "") {
        //Hidden adminsdiv
        adminsdiv.style.display = "none";
        adminsdiv.style.height = "0";			// Optionnel rétablir la hauteur
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
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Firstname" autoComplete="Firstname" /><Input type="text" placeholder="Lastname" autoComplete="Lastname" />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Pseudo" autoComplete="Pseudo" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-id-card-o"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Cin" autoComplete="Cin" />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" autoComplete="email" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />                       <Input type="password" placeholder="Repeat password" autoComplete="new-password" />

                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="phone" autoComplete="phone" /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Address" autoComplete="Address" />
                    </InputGroup>



                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-venus-mars"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <span>Gender  </span>
                      <input type="checkbox" name="sexe" value="male" />  Male  <br />
                      <input type="checkbox" name="sexe" value="female" />   Female<br />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-people"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" name="userrole" id="select" onChange={this.onchangeselect.bind(this)}>
                        <option disabled selected>Select your role </option>
                        <option value="Student">Student</option>
                        <option value="Sponsor">Sponsor</option>
                        <option value="Administration">Administration</option>
                      </Input>
                    </InputGroup>




                    <div id="Studentdiv" style={{ display: 'none' }} >
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="University" autoComplete="University" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Level" autoComplete="Level" /><Input type="text" placeholder="Inscription Number" autoComplete="Inscription Number" />
                      </InputGroup>

                    </div>


                    <div id="sponsdiv" style={{ display: 'none' }} >
                      <InputGroup>
                        <Input type="select" name="sponstype" id="selectspons" onChange={this.onchangeselectspons.bind(this)}>
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
                        <Input type="text" placeholder="Entreprise Name" autoComplete="Entreprise Name" /><Input type="text" placeholder="Matricule" autoComplete="Matricule" />
                      </InputGroup>


                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Function" autoComplete="Function" />
                      </InputGroup>
                    </div>




                    <div id="adminsdiv" style={{ display: 'none' }} >
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="University" autoComplete="University" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Departement" autoComplete="Departement" /><Input type="text" placeholder="Fonction" autoComplete="Fonction" />
                      </InputGroup>

                    </div>





                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                    </InputGroup>


                    <Button color="info" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
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
