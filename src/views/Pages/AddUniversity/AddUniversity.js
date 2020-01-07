import React, { Component } from 'react';
import { Button, Card, CardBody, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import axios from 'axios';


class Register extends Component {

  constructor(props) {
    super(props)

    
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

onSubmit(e) {
  e.preventDefault()

  const univObject = {
    Nom_Université: this.state.Nom_Université,
    Région: this.state.Région,
    Téléphone_Université: this.state.Téléphone_Université,
      Adresse_Université: this.state.Adresse_Université,
      Email_Université: this.state.Email_Université,
      logo_Université: this.state.logo,
  };

  axios.post('http://localhost:4000/api/Universite', univObject)
      .then((res) => {
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
                  
                  <Form>
                    <h2>Add New University</h2>
                  
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Nom_Université} placeholder="Name" autoComplete="Name" />              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" value={this.state.Téléphone_Université} placeholder="Phone Number" autoComplete="Phone" /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Région} placeholder="Region" autoComplete="Region" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Adresse_Université} placeholder="Adresse" autoComplete="Adresse" />              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Email_Université} placeholder="Email" autoComplete="Email" />              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" value={this.state.logo_Université} id="avatar" name="avatar" accept="image/png, image/jpeg" />
                    </InputGroup> 

                    <Button color="info" block>Validate</Button>
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

export default Register;
