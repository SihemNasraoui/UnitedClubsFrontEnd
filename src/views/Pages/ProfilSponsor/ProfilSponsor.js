import React, { Component } from 'react';
import {  Card, CardBody, Breadcrumb, BreadcrumbItem, Col, Row, CardHeader} from 'reactstrap';
class ProfilSponsor extends Component {
 
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
                <BreadcrumbItem active>Nom sponsor : { this.state.nom_Sponsor}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Matricule sponsor  : { this.state.matricule_Sponsor}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Email sponsor : { this.state.email}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Téléphone sponsor : { this.state.téléphone_Sponsor}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbItem active>Adresse sponsor : { this.state.adresse_Sponsor}</BreadcrumbItem>
              </Breadcrumb>

             

            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
}

export default ProfilSponsor;