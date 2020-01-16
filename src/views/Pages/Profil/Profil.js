import React, { Component } from 'react';
import axios from 'axios';

class Profil extends Component {

  constructor(props) {
    super(props);
    this.state = { persons: [] };
}

componentDidMount() {
    axios.get('https://localhost:5001/Etudiant')
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
                  <ul>
                  <p>Nom Etudiant :</p>  { this.state.persons.map(person => <li>{person.Nom_Etudiant}</li>)}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Profil;