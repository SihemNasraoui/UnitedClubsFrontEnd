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
        
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Profil;