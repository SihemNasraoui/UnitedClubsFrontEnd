import React, { Component } from 'react';
import axios from 'axios';

class ClubProfil extends Component {

  constructor(props) {
    super(props);
    this.state = { clubs: [] };
}

componentDidMount() {
    axios.get('http://localhost:4000/clubs')
        .then(res => {
            this.setState({ clubs: res.data });
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
                    About
                  </div>
                  <div class="card-body">
                    
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Club Name : { this.state.clubs.map(club => {club.clubname})} </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Description : { this.state.clubs.map(club => {club.description})} </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Number of member : { this.state.clubs.map(club => {club.numbermember})}</li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"> Region : { this.state.clubs.map(club => {club.region})}</li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"> Creation date : { this.state.clubs.map(club => {club.date})} </li>
                      </ol>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Establishment : { this.state.clubs.map(club => {club.etab})}</li>
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