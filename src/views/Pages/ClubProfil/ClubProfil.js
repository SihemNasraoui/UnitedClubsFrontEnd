import React, { Component } from 'react';
import logo from '../../../assets/img/brand/jeune.png';
import {AppNavbarBrand } from '@coreui/react';

import {  Card, CardBody } from 'reactstrap';
class ClubProfil extends Component {

  
  render() {
    return (
          <div className="container-fluid">
            <div className="animated fadeIn">
              <div className="row">
                <div className="col-lg-12">
                  <Card className="mx-4">
                    <CardBody className="p-4">
                        <div className="media">
                        <AppNavbarBrand className="mr-rounded mx-auto d-bloc3"
      full={{ src: logo, width: 245 , height: 230, alt: 'united Club' }}
    />
  <div className="media-body">
    <h3 className="mt-0 mb-1">{this.state.nomclub}</h3>
  </div>
</div>
    
<ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">description </li>
                      </ol>
                  < p   className="lead" id="description">{this.state.description} </p>
                <div className="row">
                <div className="col-sm-2">
    <div className="callout callout-warning b-t-1 b-r-1 b-b-1">
      <small className="text-muted">
establishment</small><br />
      <strong className="h4">{this.state.establishment}</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout callout-success b-t-1 b-r-1 b-b-1">
      <small className="text-muted">Region</small><br />
      <strong className="h4">{this.state.region}</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout callout-info b-t-1 b-r-1 b-b-1">
    <small className="text-muted"> Members<br /> /</small>
      <strong className="h4">{this.state.members} members</strong>
    </div>
  </div>
  <div className="col-sm-2">
    <div className="callout callout-danger b-t-1 b-r-1 b-b-1">
      <small className="text-muted">Creation Date</small><br />
      <strong className="h4"> {this.state.date}</strong>
    </div>
  </div>
 
  </div>
                    </CardBody>
             
                  </Card>
             
           </div>
           </div>
           </div>
           </div>
       
        );
      }
    }

export default ClubProfil;