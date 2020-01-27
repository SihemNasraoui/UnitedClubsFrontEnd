import React, { Component } from 'react';
import logo from '../../../assets/img/brand/jeune.png';
import {AppNavbarBrand } from '@coreui/react';

import {  Card, CardBody, Breadcrumb, BreadcrumbItem, Col, Row, CardHeader} from 'reactstrap';
class ClubProfil extends Component {
  
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
             
              <div class="card-header">
                     Personal informations 
                  </div>
            </CardHeader>
            <CardBody>
              <Breadcrumb>
                <BreadcrumbItem active>Identifiant Club : { this.state.id_Club}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Nom Club : { this.state.nom_Club}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Description : { this.state.description}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Date de création : { this.state.date_Création}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Email Club : { this.state.Email}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Nom Université : { this.state.nom_université}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Nom Ecole : { this.state.nom_Ecole}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Nombre de membre : { this.state.nombre_Membres}</BreadcrumbItem>
              </Breadcrumb>     

              <Breadcrumb>
                <BreadcrumbItem active>Numéro de téléphone : { this.state.téléphone_Club}</BreadcrumbItem>
              </Breadcrumb>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
}

export default ClubProfil;