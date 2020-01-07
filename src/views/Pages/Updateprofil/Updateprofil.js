import React, { Component } from 'react';
import { Button, Card, CardBody, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Universite from '../RegisterStudent/Univ';

class Updateprofil extends Component {

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

        <div class="container-fluid">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-lg-12">
              
                <Card className="mx-4">
                  <CardBody className="p-4">
                   
                    <Form>
                      
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Sihem" autoComplete="Firstname" /><Input type="text" placeholder="Nasraoui" autoComplete="Lastname" />
                      </InputGroup>
  
  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="SihemNs" autoComplete="Pseudo" />
                      </InputGroup>
  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-id-card-o"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="15789456" autoComplete="Cin" />
                      </InputGroup>
  
  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="nasraouisihem11@gmail.com" autoComplete="email" />
                      </InputGroup>
  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="************" autoComplete="new-password" />                       

  
                      </InputGroup>
  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-phone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="28789654" autoComplete="Phone" /><InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-location-pin"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Tunis" autoComplete="Address" />
                      </InputGroup>
  
  
  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="25/08/1995" />
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
  
  
                <Universite />
                      
  
  
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
  
  
  
                      <Button color="info" block>Update</Button>
                    </Form>
                  </CardBody>
           
                </Card>
           
         </div>
         </div>
         </div>
         </div>
     
      );
    }
  }
  
  export default Updateprofil;
  