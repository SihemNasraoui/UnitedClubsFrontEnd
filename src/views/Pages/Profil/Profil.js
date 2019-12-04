import React, { Component } from 'react';


class Profil extends Component {
  render() {

    return (
      <div class="container-fluid">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <i></i> Personal informations 
                  </div>
                  <div class="card-body">
                    
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">First Name : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Last Name : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Email : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Adress : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"> Gender : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Phone number : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Birthday date : </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Role : </li>
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

export default Profil;