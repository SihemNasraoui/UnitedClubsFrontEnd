import React, { Component } from 'react';
import { Button, Card, CardBody, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import axios from 'axios';


class Register extends Component {

  constructor(props) {
    super(props)

    this.handleChangeNomUniversité = this.handleChangeNomUniversité.bind(this);
    this.handleChangeRegion = this.handleChangeRegion.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAdresse = this.handleChangeAdresse.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeimg = this.handleChangeimg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        Nom_Université: '',
        Région: '',
        Téléphone_Université: '',
        Adresse_Université: '',
        Email_Université: '',
        logo_Université: ''
    }
}

handleChangeNomUniversité = event => {   this.setState({ Nom_Université: event.target.value }); }

handleChangeRegion = event => {   this.setState({ Région: event.target.value }); }

handleChangePhone = event => {   this.setState({ Téléphone_Université: event.target.value }); }

handleChangeAdresse = event => {   this.setState({ Adresse_Université: event.target.value }); }

handleChangeEmail = event => {   this.setState({ Email_Université: event.target.value }); }

handleChangeimg = event => {   this.setState({ logo_Université: event.target.value }); }


onSubmit = event => {
  event.preventDefault()

  const univObject = {
    Nom_Université: this.state.Nom_Université,
    Région: this.state.Région,
    Téléphone_Université: this.state.Téléphone_Université,
    Adresse_Université: this.state.Adresse_Université,
    Email_Université: this.state.Email_Université,
    logo_Université: this.state.logo,
  };
 

  axios.post('https://localhost:5001/api/Universite', univObject)
      .then((res) => {
        console.log(res)
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });

  this.setState({ Nom_Université: '', Région: '', Téléphone_Université: '',Adresse_Université: '',  Email_Université: '', logo_Université: '' })
}

  render() {
    return (
      <div class="container-fluid">
      <div class="animated fadeIn">
        <div class="row">
          <div class="col-lg-12">
              <Card className="mx-4">
                <CardBody className="p-4">
                  
                  <form onSubmit={this.onSubmit}>
                    <h2>Add New University</h2>
                  
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Nom_Université} placeholder="Name" autoComplete="Name" onChange={this.handleChangeNomUniversité}/>              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" name="this.state.Téléphone_Université" placeholder="Phone Number" autoComplete="Phone" onChange={this.handleChangePhone}/><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="this.state.Région" placeholder="Region" autoComplete="Region" onChange={this.handleChangeRegion}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="this.state.Adresse_Université" placeholder="Adresse" autoComplete="Adresse" onChange={this.handleChangeAdresse}/>              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="this.state.Email_Université" placeholder="Email" autoComplete="Email" onChange={this.handleChangeEmail} />              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" name="this.state.logo_Université" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={this.handleChangeimg}/>
                    </InputGroup> 

                    <Button color="info" block>Validate</Button>
                  </form>
                </CardBody>
                
              </Card>
   </div>
   </div>
   </div>
   
      </div>
    );
  }
}

export default Register;
