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
    var universitydiv = document.getElementById('universitydiv');


    if (choix === "Student") {
      if (studentdiv.style.display === "") {
        //Hidden studentdiv
        studentdiv.style.display = "none";
        studentdiv.style.height = "0";			// Optionnel rétablir la hauteur

        universitydiv.style.display = "none";
        universitydiv.style.height="0";
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
        universitydiv.style.height="auto";
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
        universitydiv.style.height="0";
      }

    } else {
      if (adminsdiv.style.display === "") {
        //Hidden adminsdiv
        adminsdiv.style.display = "none";
        adminsdiv.style.height = "0";			// Optionnel rétablir la hauteur

        universitydiv.style.display = "none";
        universitydiv.style.height="0";
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
        universitydiv.style.height="auto";
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


                    <div id="universitydiv" style={{ display: 'none' }} >
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" name="university" id="university">
                          <option disabled selected>Select your university</option>
                        <option value="University_of_Tunis">University of Tunis</option>
                        <option value="University of_Tunis El Manar ">University of Tunis El Manar </option>
                        <option value="University_of_Cartage">University of Cartage</option>
                        <option value="University_of_Sousse">University of Sousse</option>
                        <option value="University_of_Sfax ">University of Sfax</option>
                        <option value="University_of_Manouba">University of Manouba</option>
                        <option value="University_of_Monastir">University of Monastir</option>
                        <option value="University_of_Ez-Zitouna">University of Ez-Zitouna</option>
                        <option value="University_of_Virtual">University of Virtual</option>
                        <option value="University_of_Gafsa">University of Gafsa</option>
                        <option value="University_of_Jendouba">University of Jendouba</option>
                        <option value="University_of_Gabes">University of Jendouba</option>
                        <option value="University_of_Kairouan">University of Kairouan</option>
                        <option value="Higher_Institutes_of_Technological_Studies">Higher Institutes of Technological Studies</option>
                      </Input>
                      </InputGroup>
                      </div>

                      <div id="tunisdiv" style={{ display: 'none' }} >
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" name="tunisdiv" id="tunisdiv">
                          <option disabled selected>Select </option>
                        <option value="fshst">Faculté des Sciences Humaines et Sociales de Tunis</option>
                        <option value="essect ">Ecole Supérieure des Sciences Economiques et Commerciales de Tunis </option>
                        <option value="ens">Ecole Normale Supérieure</option>
                        <option value="esstt">Ecole Supérieure des Sciences et Techniques de Tunis</option>
                        <option value="ipstt">Institut Préparatoire aux Etudes d'Ingénieurs de Tunis</option>
                        <option value="ipelsht">Institut Préparatoire aux Etudes Littéraires et de Sciences Humaines de Tunis</option>
                        <option value="isgt"> Institut Supérieur de Gestion de Tunis</option>
                        <option value="isefc">Institut Supérieur de l'Education et de la Formation Continue</option>
                        <option value="isbat">Institut Supérieur des Beaux Arts de Tunis</option>
                        <option value="University_of_Gafsa">University of Gafsa</option>
                        <option value="ism">Institut Supérieur de Musique</option>
                        <option value="isad">Institut Supérieur d'Art Dramatique</option>
                        <option value="isscmpt">Institut Supérieur des Sciences Culturelles et Métiers du Patrimoine de Tunis</option>
                        <option value="iseaht">Institut Supérieur des Etudes Appliquées en Humanités de Tunis</option>
                        <option value="isajc">Institut Supérieur de l'Animation pour la Jeunesse et la Culture</option>
                        <option value="iseahz">Institut Supérieur des Études Appliquées en Humanités de Zaghouan</option>
                        <option value="inp">Institut National du Patrimoine</option>
                        <option value="tbs">Tunis Business School</option>
                      
                      </Input>
                      </InputGroup>
                      </div>





                      <div id="manardiv" style={{ display: 'none' }} >
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-graduation"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" name="manardiv" id="manardiv">
                          <option disabled selected>Select </option>
                        <option value="fdspt">Faculté de Droit et des Sciences Politiques de Tunis</option>
                        <option value="fsegt">Faculté des Sciences Economique et de Gestion de Tunis </option>
                        <option value="fst">Faculté des sciences de tunis</option>
                        <option value="fsm">Faculté de Médecine de Tunis</option>
                        <option value="ensit">Ecole Nationale d'Ingénieurs de Tunis</option>
                        <option value="iblv">Institut Bourguiba des Langues Vivantes</option>
                        <option value="ipeim"> Institut Préparatoire aux Etudes d'Ingénieurs d'El Manar</option>
                        <option value="issba">Institut Supérieur des Sciences Biologiques Appliquées</option>
                        <option value="isi">Institut Supérieur d'Informatique d'El Manar</option>
                        <option value="issht">Institut Supérieur des Sciences Humaines de Tunis</option>
                        <option value="istm"> Institut Supérieur des Technologies Médicales</option>
                        <option value="esstst">Ecole Supérieure des Sciences et Techniques de la Santé de Tunis</option>
                        <option value="issit">Institut Supérieur des Sciences infirmières de Tunis</option>
                        <option value="ip">Institut Pasteur</option>
                        <option value="irvt">Institut de Recherche Vétérinaire de Tunis</option>
                        
                      </Input>
                      </InputGroup>
                      </div>
























                    <div id="Studentdiv" style={{ display: 'none' }} >
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
