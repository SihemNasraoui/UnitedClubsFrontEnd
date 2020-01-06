import React, { Component } from 'react';
import logo from '../../../assets/img/brand/jeune.png';
import reactf from '../../../assets/img/brand/react.jpg';
import meet from '../../../assets/img/brand/meet.jpg';
import open from '../../../assets/img/brand/open.png';

import {  AppNavbarBrand } from '@coreui/react';

import { Card, CardBody } from 'reactstrap';
class EventCard extends Component{
  render(){
    return(
      <div className="card" >
<div className="media">
                        <AppNavbarBrand className="mr-rounded mx-auto d-bloc3"
      full={{ src: reactf, width: 140 , height: 130, alt: 'united Club' }}
    />
  <div className="media-body">
  <div class="card-body">
    <h5 class="card-title">React JS training</h5>
    <p class="card-text">Hello everyone ❤
We are offering a React JS training 🤩
we are inviting you dear reader 🤓 to come and discover why 140k developers in the world are using the react library 🔥💛 Don't hesitate and join our J2I family !
we are waiting for you 💪
#Dont wait for opportunity…
</p>
    <a href="#" class="btn btn-primary">Modifier</a>
  </div>
</div>
  </div>


</div>
    );
  }
}
class Eventlist extends Component {
  constructor(){
    super();
    this.state ={
      nomclub :"JEUNE INGENIEUR",logo:"", 
      events:[],
    }
  }
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
      full={{ src: logo, width: 140 , height: 130, alt: 'united Club' }}
    />
  <div className="media-body">
    <h3 className="mt-0 mb-1">{this.state.nomclub}</h3>
  </div>
</div>
<EventCard />
<div className="card" >
<div className="media">
                        <AppNavbarBrand className="mr-rounded mx-auto d-bloc3"
      full={{ src: open, width: 140 , height: 130, alt: 'united Club' }}
    />
  <div className="media-body">
  <div class="card-body">
    <h5 class="card-title">Open Day</h5>
    <p class="card-text">Bonjour là-bas ! 💛💙
Nous sommes heureux de vous inviter jeudi 31 octobre à la pause déjeuner à notre 🎉 journée d'ouverture 🎉 et découvrez ce que nous préparons pour cette nouvelle année ! 🤩
</p>
    <a href="#" class="btn btn-primary">Modifier</a>
  </div>
</div>
  </div>


</div><div className="card" >
<div className="media">
                        <AppNavbarBrand className="mr-rounded mx-auto d-bloc3"
      full={{ src: meet, width: 140 , height: 130, alt: 'united Club' }}
    />
  <div className="media-body">
  <div class="card-body">
    <h5 class="card-title">Let's Meet</h5>
    <p class="card-text">La journée des clubs approche à grand pas 🤩🤩
Venez découvrir mercredi ce que nous vous réservons pour cette nouvelle année à notre stand J2I ! </p>
    <a href="#" class="btn btn-primary">Modifier</a>
  </div>
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

export default Eventlist;