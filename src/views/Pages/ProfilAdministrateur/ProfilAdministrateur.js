import React, { Component } from 'react';
import {  Card, CardBody, Breadcrumb, BreadcrumbItem, Col, Row, CardHeader} from 'reactstrap';
class ProfilAdministrateur extends Component {
 
  constructor(props) {
    super(props)
    this.state = JSON.parse(localStorage.getItem("user"))
    this.token= JSON.parse(localStorage.getItem("token"))

    console.log(this.state)
}
 
  
render() {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
             
            
                     Personal informations 
                  
            </CardHeader>
            <CardBody>
              <Breadcrumb>
                <BreadcrumbItem active>Nom administrateur : { this.state.nom_Admin}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Prénom administrateur  : { this.state.prénom_Admin}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Email  administrateur : { this.state.email_Admin}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active> Nom ecole administrateur : { this.state.nom_Ecole_Administration}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Departement : { this.state.departement}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Fonction administrateur : { this.state.fonction_Adminstration}</BreadcrumbItem>
              </Breadcrumb>
             

            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
}

export default ProfilAdministrateur;