import React, { Component } from 'react';


class ClubProfil extends Component {
  render() {

    return (
      <div class="container-fluid">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    About
                  </div>
                  <div class="card-body">
                    
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Club Name : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Description : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Number of member : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"> Region : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"> Creation date : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Establishment : </li>
                      </ol>
                               
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ClubProfil;