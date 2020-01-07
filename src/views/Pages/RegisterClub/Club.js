import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Universite from './Univ';
import axios from 'axios';

import logo from '../../../assets/img/brand/logo.png'
import { AppNavbarBrand} from '@coreui/react';

class Club extends Component {
  constructor(props) {
    super(props)

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Nom_Club: '',
      Téléphone_Club: '',
      Description: '',
      Nombre_Membres: '',
      Date_Création: '',
      Email_Club: '',
      Password_Club: '',
      Nom_université: '',
      Nom_Ecole: '',
      logo: ''
     
    }
}

onSubmit(u) {
  u.preventDefault()

  var club = {
    clubname: this.state.clubname,
    phone: this.state.phone,
    Nombre_Membres: this.state.Nombre_Membres,
    description: this.state.description,
    date: this.state.date,
    email: this.state.email,
    password: this.state.password,
    Nom_université: this.state.Nom_université,
    Nom_Ecole: this.state.Nom_Ecole,
    logo: this.state.logo
    
  };

 
  axios.post('http://localhost:4000/api/Club', club)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });

  this.setState({ clubname: '',  description: '', email: '', password: '', phone: '', adresse: '', date: '', logo: ''})
}


  render() {
    return (
      
      <div className="app flex-row align-items-center">
       
        <Container>
          <Row className="justify-content-center">
          
            <Col md="9" lg="7" xl="6">
                     <Card className="mx-4">
                <CardBody className="p-4">
                                   <AppNavbarBrand 
      full={{ src: logo, width: 145 , height: 130, alt: 'united Club'}}
    />
 
                  <Form>
                    <h2>REGISTER CLUB</h2>
                    <p className="text-muted">Create your club account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.clubname} required placeholder="Clubname" autoComplete="Clubname" />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-id-card-o"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="textarea" value={this.state.description} required placeholder=" Description of the club" autoComplete=" Description of the club" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" value={this.state.email} required placeholder="Email" autoComplete="email" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" value={this.state.password}  required placeholder="Password" autoComplete="new-password" />                       <Input type="password" required placeholder="Repeat password" autoComplete="new-password" />

                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="phone" value={this.state.phone} required placeholder="Phone" autoComplete="Phone" /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.adresse} required placeholder="Address" autoComplete="Address" />
                    </InputGroup>

                    <Universite />

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"> &nbsp;Date of creation</i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" value={this.state.date}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">

                        <InputGroupText>
                          <i className="icon-camera"> &nbsp; &nbsp;LOGO</i>
                        </InputGroupText>
                      </InputGroupAddon> <input value={this.state.logo} requiered type="file" id="logo" name="logo" accept="image/png, image/jpeg" />
                    </InputGroup>


                    <Button type="submit" color="info" block>Create Club</Button>
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

export default Club;
