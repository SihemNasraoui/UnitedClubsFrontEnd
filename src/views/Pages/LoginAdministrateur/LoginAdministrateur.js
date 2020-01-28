import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';

class LoginAdministrateur extends Component {

  constructor(props) {
    super(props)

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangepsd = this.handleChangepsd.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Email: '',
      Password: '',
      redirect: false
     
    }
}


  handleChangeLogin = event => {   this.setState({ Email: event.target.value }); }

  handleChangepsd = event => {   this.setState({ Password: event.target.value }); }

  onSubmit = event => {
    event.preventDefault()
  
    var user = {
      Email: this.state.Email,
      Password: this.state.Password,  
    };
console.log(user);
    axios.post('https://localhost:5001/api/Admin/SignIn', user)
      .then((res) => {
       if(res["data"]["response"]!="vous devez créer  vérifiez vos informations de connexion"){
        this.props.history.push('/dashboard/profilAdministrateur');
        localStorage.setItem("token",JSON.stringify(res["data"]["token"]))
        localStorage.setItem("user",JSON.stringify(res["data"]["response"]))
       }else
       {   console.log(res["data"]["response"]) }
    
      }).catch((error) => {

          console.log(error)
      });

  this.setState({ Email: '',  Password: ''})
}

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.Email} placeholder="email" autoComplete="email" onChange={this.handleChangeLogin}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" value={this.state.Password} placeholder="Password" autoComplete="current-password" onChange={this.handleChangepsd}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                   
                      </Row>
                    </form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h1>Sign Up</h1><br/>
                      <h2> Let's find you the perfect events </h2>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginAdministrateur;