import React, { Component } from 'react';
import { Button, Card, CardBody, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import axios from 'axios';


class Register extends Component {

  constructor(props) {
    super(props)

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        phone:'',
        adresse: '',
        region: '',
        email: '',
        logo: ''
    }
}

onSubmit(e) {
  e.preventDefault()

  const etabObject = {
      name: this.state.name,
      phone: this.state.phone,
      adresse: this.state.adresse,
      region: this.state.region,
      email: this.state.email,
      logo: this.state.logo,
  };

  axios.post('http://localhost:4000/etab/create', etabObject)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });

  this.setState({ name: '', phone: '', adresse: '',  region: '', email: '', logo: '' })
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
                    <h2>Add New Establishment</h2>
                  
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.name} placeholder="Name" autoComplete="Name" />              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" value={this.state.phone} placeholder="Phone Number" autoComplete="Phone" /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.adresse} placeholder="Adresse" autoComplete="Adresse" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.email} placeholder="Email" autoComplete="Email" />              
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" value={this.state.logo} id="avatar" name="avatar" accept="image/png, image/jpeg" />
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
