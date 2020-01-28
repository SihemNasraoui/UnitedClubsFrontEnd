import React, { Component } from 'react';
import {  Card, CardBody, Breadcrumb, BreadcrumbItem, Col, Row, CardHeader} from 'reactstrap';
class ProfilStudent extends Component {
 
  constructor(props) {
    super(props)
    this.state = JSON.parse(localStorage.getItem("user"))
    this.token= JSON.parse(localStorage.getItem("token"))
    /* localStorage.clear()*/
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
                <BreadcrumbItem active>Nom : { this.state.nom_Etudiant}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Prénom  : { this.state.prénom_Etudiant}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>CIN  : { this.state.cin}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Date de naissance  : { this.state.date_naissance}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Email  : { this.state.email}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Téléphone  : { this.state.téléphone}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Adresse  : { this.state.adresse_Etudiant}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Nom école  : { this.state.nom_Ecole_Etudiant}</BreadcrumbItem>
              </Breadcrumb>
              
              <Breadcrumb>
                <BreadcrumbItem active>Niveau universitaire  : { this.state.niveau_universitaire}</BreadcrumbItem>
              </Breadcrumb>


              <Breadcrumb>
                <BreadcrumbItem active>Numéro insciption  : { this.state.num_Inscription}</BreadcrumbItem>
              </Breadcrumb>


        


            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
}

export default ProfilStudent;