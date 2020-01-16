import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


class RegisterSponsor extends Component {
  constructor(props) {
    super(props)

    this.handleChangeNom_Sponsor = this.handleChangeNom_Sponsor.bind(this);
    this.handleChangeEmail_Sponsor = this.handleChangeEmail_Sponsor.bind(this);
    this.handleChangeTéléphone_Sponsor = this.handleChangeTéléphone_Sponsor.bind(this);
    this.handleChangeAdresse_Sponsor = this.handleChangeAdresse_Sponsor.bind(this);
    this.handleChangeMot_de_passe_Sponsor = this.handleChangeMot_de_passe_Sponsor.bind(this);
    this.handleChangeMatricule_Sponsor = this.handleChangeMatricule_Sponsor.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);


    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Nom_Sponsor: '',
      Email_Sponsor: '',
      Téléphone_Sponsor: '',
      Adresse_Sponsor: '',
      Mot_de_passe_Sponsor: '',
      Matricule_Sponsor: '',
      Image: ''
     
    }
}

handleChangeNom_Sponsor = event => {   this.setState({ Nom_Sponsor: event.target.value }); }

handleChangeEmail_Sponsor = event => {   this.setState({ Email_Sponsor: event.target.value }); }

handleChangeTéléphone_Sponsor = event => {   this.setState({ Téléphone_Sponsor: event.target.value }); }

handleChangeAdresse_Sponsor = event => {   this.setState({ Adresse_Sponsor: event.target.value }); }

handleChangeMot_de_passe_Sponsor = event => {   this.setState({ Mot_de_passe_Sponsor: event.target.value }); }

handleChangeMatricule_Sponsor = event => {   this.setState({ Matricule_Sponsor: event.target.value }); }

handleChangeImage = event => {   this.setState({ Image: event.target.value }); }


onSubmit = event => {
  event.preventDefault()

  var sponsor = {
    Nom_Sponsor: this.state.Nom_Sponsor,
    Email_Sponsor: this.state.Email_Sponsor,
    Téléphone_Sponsor: this.state.Téléphone_Sponsor,
    Adresse_Sponsor: this.state.Adresse_Sponsor,
    Mot_de_passe_Sponsor: this.state.Mot_de_passe_Sponsor,
    Matricule_Sponsor: this.state.Matricule_Sponsor,
    Image: this.state.Image,
    
  };



  axios.post('https://localhost:5001/Sponsor', sponsor)
      .then((res) => {
console.log(res)
console.log(res.data)

      }).catch((error) => {

          console.log(error)
      });

  this.setState({ Nom_Sponsor: '',  Email_Sponsor: '', Téléphone_Sponsor: '', Adresse_Sponsor: '', Mot_de_passe_Sponsor: '', Image: ''})
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
                  <form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Nom_Sponsor}  placeholder="Firstname" autoComplete="Firstname"  onChange={this.handleChangeNom_Sponsor}/>
                    </InputGroup>




                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" required  value={this.state.Email_Sponsor} placeholder="Email" autoComplete="email" onChange={this.handleChangeEmail_Sponsor}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" required  value={this.state.Mot_de_passe_Sponsor} placeholder="Password" autoComplete="new-password" onChange={this.handleChangeMot_de_passe_Sponsor}/>                       
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />

                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="matricule" required  value={this.state.Matricule_Sponsor} placeholder="Matricule" autoComplete="matricule" onChange={this.handleChangeMatricule_Sponsor}/>                       

                    </InputGroup>



                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" value={this.state.Téléphone_Sponsor} placeholder="Phone" autoComplete="Phone" onChange={this.handleChangeTéléphone_Sponsor} /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Adresse_Sponsor}  placeholder="Address" autoComplete="Address" onChange={this.handleChangeAdresse_Sponsor} />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file"  value={this.state.Image} id="avatar" name="avatar" accept="image/png, image/jpeg"  onChange={this.handleChangeImage}/>
                    </InputGroup>


                    <Button type="submit" color="info" >Create Account</Button>
                  </form>
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
