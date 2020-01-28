import React, { Component } from 'react';
import { Button, Card, CardBody, Form, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import axios from 'axios';

class AddEvent extends Component {
constructor(){
    super();
    this.state ={
      Nom_Evenement:'',
      Id_Evenement: '',
      Région:'',
      Description:'',
      Domaine:'',
      Nom_université:'',
      Nom_Ecole:'',
      Date_début_inscription:'',
      Date_fin_inscription:'',
      Date_validation:'',
      Date_réalisation:'',
      Durée:'',
      Nom_Club:'',
    //  nombreInscrit:'',
      affiche:''
    }
   
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onchangeselectuniv = this.onchangeselectuniv.bind(this);
    }
    
  
    
    
  
  
    onChange(e)
  { 
      this.setState({ [e.target.name] : e.target.value });
   
  }

 onchangeselectuniv = (u) => {
      this.setState({[u.target.name]: u.target.value});
      let choix = document.getElementById('university').value;
      var tunisdiv = document.getElementById('tunisdiv');
      var manardiv = document.getElementById('manardiv');
      var manoubadiv = document.getElementById('manoubadiv');
      var Soussediv = document.getElementById('Soussediv');
      var Gafsadiv = document.getElementById('Gafsadiv');
      var Kairouandiv = document.getElementById('Kairouandiv');
      var Isetdiv = document.getElementById('Isetdiv');
      var Gabesdiv = document.getElementById('Gabesdiv');
      var Jandoubadiv = document.getElementById('Jandoubadiv');
      var virtuelldiv = document.getElementById('virtuelldiv');
      var Ez_Zitounadiv = document.getElementById('Ez_Zitounadiv');
      var Mahdiadiv = document.getElementById('Mahdiadiv');
      var carthagediv = document.getElementById('carthagediv');
    }



   onSubmit = event => {
    event.preventDefault()
  
    const eventObject = {
      Nom_Evenement: this.state.Nom_Evenement,
      Id_Evenement: this.state.Id_Evenement,
      Région: this.state.Région,
      Description: this.state.Description,
      Domaine: this.state.Domaine,
      Nom_université: this.state.Nom_université,
      Nom_Ecole: this.state.Nom_Ecole,
      Date_début_inscription: this.state.Date_début_inscription,
      Date_fin_inscription: this.state.Date_fin_inscription,
      Date_validation: this.state.Date_validation,
      Date_réalisation: this.state.Date_réalisation,
      Durée: this.state.Durée,
      Nom_Club: this.state.Nom_Club,
      Image: null,
    };
  
    axios.post('https://localhost:5001/api/Evenement', eventObject)
        .then((res) => {
          console.log(res)
          this.props.history.push('/dashboard/clubprofil');
            console.log(res.data)
            console.log(res.data.Nom_université)
        }).catch((error) => {
            console.log(error)
        });
  
    this.setState({ Nom_université:'', Id_Evenement: '', Région:'', Nom_Ecole:'', Date_début_inscription:'', Date_fin_inscription:'', Date_validation:'',Date_réalisation:'',Durée:'',Nom_Club:'',})
  }
  render() {
    return (
      <div class="container-fluid">
      <div class="animated fadeIn">
        <div class="row">
          <div class="col-lg-12">
              <Card className="mx-4">
                <CardBody className="p-4">
                  
                  <form onSubmit={this.onSubmit}>
                    <h2>Add New Event</h2>
                  
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Event Name " name="Nom_Evenement" onChange={this.onChange} autoComplete="EventName" />              
                      <Input type="text" placeholder="identifiant event " name="Id_Evenement" onChange={this.onChange} autoComplete="IdEvent" />              

                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Domaine " name="Domaine" onChange={this.onChange} autoComplete="Domaine" />              
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-id-card-o"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="textarea" placeholder="Description of event" name="Description" onChange={this.onChange} autoComplete="Event description" />              
                    </InputGroup>
  
                    <InputGroup className="mb-3"><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Adresse" name="Région" onChange={this.onChange} autoComplete="Adresse" />
                    </InputGroup>
  
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i></InputGroupText><InputGroupText>Event inscription date
                        </InputGroupText>
                      </InputGroupAddon>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                         Start
                        </InputGroupText>
                      </InputGroupAddon> <Input type="date" name="Date_début_inscription" onChange={this.onChange}/>  < InputGroupAddon addonType="prepend">
                        <InputGroupText>
                         End
                        </InputGroupText>
                      </InputGroupAddon>                   <Input type="date" name="Date_fin_inscription" onChange={this.onChange}/>_

                    </InputGroup>
  
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i></InputGroupText><InputGroupText>Validation date
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" name="Date_validation" onChange={this.onChange}/></InputGroup>
                      <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i> </InputGroupText><InputGroupText>Realisation date
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" name="Date_réalisation" onChange={this.onChange}/></InputGroup>


                      <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-clock"></i> </InputGroupText><InputGroupText> Event Duration
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="texte" name="Durée" onChange={this.onChange} /></InputGroup>

                      
                      <div id="universitydiv"  >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select"   name="Nom_université" id="university" onChange={this.onchangeselectuniv.bind(this)} >
              <option disabled selected>Select your university</option>
              <option value="University_of_Tunis">University of Tunis</option>
              <option value="University of_Tunis_El_Manar">University of Tunis El Manar </option>
              <option value="University_of_Cartage">University of Cartage</option>
              <option value="University_of_Sousse">University of Sousse</option>
              <option value="University_of_Sfax ">University of Sfax</option>
              <option value="University_of_Manouba">University of Manouba</option>
              <option value="University_of_Monastir">University of Monastir</option>
              <option value="University_of_Ez-Zitouna">University of Ez-Zitouna</option>
              <option value="University_of_Virtual">University of Virtual</option>
              <option value="University_of_Gafsa">University of Gafsa</option>
              <option value="University_of_Jendouba">University of Jendouba</option>
              <option value="University_of_Gabes">University of Gabes</option>
              <option value="University_of_Kairouan">University of Kairouan</option>
              <option value="Higher_Institutes_of_Technological_Studies">Higher Institutes of Technological Studies</option>
            </Input>
          </InputGroup>
        </div>




                      <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="CLUB " name="Nom_Club" onChange={this.onChange} autoComplete="Club Name" />              
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" id="avatar"  accept="image/png, image/jpeg" name="affiche" onChange={this.onChange}/>
                    </InputGroup> 
  
                    <Button type="submit" color="info" block>Create Event</Button>
                  </form>
                </CardBody>
                
              </Card>
   </div>
   </div>
   </div>
   
      </div>
    );
  }
  }

export default AddEvent;