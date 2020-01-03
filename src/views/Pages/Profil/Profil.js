import React, { Component } from 'react';
import axios from 'axios';

class Profil extends Component {

  constructor(props) {
    super(props);
    this.state = { persons: [] };
}

componentDidMount() {
    axios.get('http://localhost:4000/users')
        .then(res => {
            this.setState({ persons: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
}





  render() {

    return (
      <div class="container-fluid">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                     Personal informations 
                  </div>
                  <div class="card-body">
                    
                      <ol class="breadcrumb" > 
                        <li class="breadcrumb-item active" aria-current="page">First Name :   { this.state.persons.map(person => {person.firstname})}</li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Last Name : { this.state.persons.map(person => {person.lastname})} </li>
                      </ol>

                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">CIN : { this.state.persons.map(person => {person.cin})} </li>
                      </ol>

                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Email : { this.state.persons.map(person => {person.email})} </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Adress : { this.state.persons.map(person => {person.adresse})}</li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"> Gender : { this.state.persons.map(person => {person.gender})} </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Phone number :  { this.state.persons.map(person => {person.phone})} </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Birthday date :  { this.state.persons.map(person => {person.date})} </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Role : { this.state.persons.map(person => {person.role})}</li>
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