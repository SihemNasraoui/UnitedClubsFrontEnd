import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


class RegisterStudent extends Component {

  constructor(props) {
    super(props)    
   
    this.handleChangeCin = this.handleChangeCin.bind(this);
    this.handleChangeNom_Etudiant = this.handleChangeNom_Etudiant.bind(this);
    this.handleChangePrénom_Etudiant = this.handleChangePrénom_Etudiant.bind(this);
    this.handleChangeDate_naissance = this.handleChangeDate_naissance.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeTéléphone = this.handleChangeTéléphone.bind(this);
    this.handleChangeAdresse_Etudiant = this.handleChangeAdresse_Etudiant.bind(this);
    this.handleChangeMot_de_passe = this.handleChangeMot_de_passe.bind(this);
    this.handleChangeNum_Inscription = this.handleChangeNum_Inscription.bind(this);
    this.handleChangeNiveau_universitaire = this.handleChangeNiveau_universitaire.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeselectecole = this.onChangeselectecole.bind(this);
    
    this.onchangeselectuniv = this.onchangeselectuniv.bind(this);

    this.state = {
        Cin: '',
        Nom_Etudiant: '',
        Prénom_Etudiant: '',
        Date_naissance: '',
        Email: '',
        Téléphone:'',
        Adresse_Etudiant: '',
        SexeU: '',
        Mot_de_passe: '',
        Num_Inscription: '',
        Niveau_universitaire: '',
        Nom_Ecole_Etudiant: '',
        Image: '',  
        
    }
}


onchangeselectuniv = (u) => {

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

  if (choix === "University_of_Tunis") {
    if (tunisdiv.style.display === "") {
      //hidetunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
    } else {
      //Show tunisdiv
      tunisdiv.style.display = "";
      tunisdiv.style.height = "auto";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";
      //hide manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";
      //hide soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";

      //hide Ezziitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide cartagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University of_Tunis_El_Manar") {
    if (manardiv.style.display === "") {
      //hidemanardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";
    } else {
      //Show manardiv
      manardiv.style.display = "";
      manardiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";
      //hide soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";

      //hide Ezziitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide cartagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University_of_Cartage") {
    if (carthagediv.style.display === "") {
      //hidecarthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
    } else {
      //Show carthagediv
      carthagediv.style.display = "";
      carthagediv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";
      //hide soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";

      //hide Ezziitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University_of_Sousse") {
    if (Soussediv.style.display === "") {
      //hideSoussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
    } else {
      //Show Soussediv
      Soussediv.style.display = "";
      Soussediv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";

      //hide Ezziitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University_of_Manouba") {
    if (manoubadiv.style.display === "") {
      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";
    } else {
      //Show Manoubadiv
      manoubadiv.style.display = "";
      manoubadiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";

      //hide Ezziitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University_of_Monastir") {
    if (Mahdiadiv.style.display === "") {
      //hide Monastirdiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";
    } else {
      //Show Mahdiadiv
      Mahdiadiv.style.display = "";
      Mahdiadiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";

      //hide Ezziitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University_of_Ez-Zitouna") {
    if (Ez_Zitounadiv.style.display === "") {
      //hide Ez-Zitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";
    } else {
      //Show Ez-Zitounadiv
      Ez_Zitounadiv.style.display = "";
      Ez_Zitounadiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University_of_Virtual") {
    if (virtuelldiv.style.display === "") {
      //hide virtueldiv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";
    } else {
      //Show virtueldiv
      virtuelldiv.style.display = "";
      virtuelldiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Ezitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  } else if (choix === "University_of_Gafsa") {
    if (Gafsadiv.style.display === "") {
      //hide Gafsadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
    } else {
      //Show Gafsadiv
      Gafsadiv.style.display = "";
      Gafsadiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Ezitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  }  else if (choix === "University_of_Jendouba") {
    if (Jandoubadiv.style.display === "") {
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
    } else {
      //Show Jandoubadiv
      Jandoubadiv.style.display = "";
      Jandoubadiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Ezitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  }  else if (choix === "University_of_Gabes") {
    if (Gabesdiv.style.display === "") {
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
    } else {
      //Show Jandoubadiv
      Gabesdiv.style.display = "";
      Gabesdiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Jandoubadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Ezitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  }   else if (choix === "University_of_Kairouan") {
    if (Kairouandiv.style.display === "") {
      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";
    } else {
      //Show Kairouandiv
      Kairouandiv.style.display = "";
      Kairouandiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Jandoubadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Ezitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";

    }
  }  else if (choix === "Higher_Institutes_of_Technological_Studies") {
    if (Isetdiv.style.display === "") {
      //hide Isetdiv
      Isetdiv.style.display = "none";
      Isetdiv.style.height = "0";
    } else {
      //Show Isetdiv
      Isetdiv.style.display = "";
      Isetdiv.style.height = "auto";

      //hide tunisdiv
      tunisdiv.style.display = "none";
      tunisdiv.style.height = "0";
      //hide Soussediv
      Soussediv.style.display = "none";
      Soussediv.style.height = "0";
      //hide carthagediv
      carthagediv.style.display = "none";
      carthagediv.style.height = "0";
      //hide virtuellediv
      virtuelldiv.style.display = "none";
      virtuelldiv.style.height = "0";
      //hide Gabesdiv
      Gabesdiv.style.display = "none";
      Gabesdiv.style.height = "0";
      //hide Jandoubadiv
      Jandoubadiv.style.display = "none";
      Jandoubadiv.style.height = "0";
      //hide Jandoubadiv
      Gafsadiv.style.display = "none";
      Gafsadiv.style.height = "0";
      //hide Ezitounadiv
      Ez_Zitounadiv.style.display = "none";
      Ez_Zitounadiv.style.height = "0";

      //hide Mahdiadiv
      Mahdiadiv.style.display = "none";
      Mahdiadiv.style.height = "0";

      //hide Manoubadiv
      manoubadiv.style.display = "none";
      manoubadiv.style.height = "0";

      //hide manardiv
      manardiv.style.display = "none";
      manardiv.style.height = "0";

      //hide Kairouandiv
      Kairouandiv.style.display = "none";
      Kairouandiv.style.height = "0";

    }
  }
}

handleChangeCin = event => {   this.setState({ Cin: event.target.value }); }
handleChangeNom_Etudiant = event => {   this.setState({ Nom_Etudiant: event.target.value }); }
handleChangePrénom_Etudiant = event => {   this.setState({Prénom_Etudiant : event.target.value }); }
handleChangeDate_naissance = event => {   this.setState({Date_naissance : event.target.value }); }
handleChangeEmail = event => {   this.setState({Email : event.target.value }); }
handleChangeTéléphone = event => {   this.setState({Téléphone : event.target.value }); }
handleChangeAdresse_Etudiant = event => {   this.setState({ Adresse_Etudiant: event.target.value }); }
handleChangeMot_de_passe = event => {   this.setState({Password : event.target.value }); }
handleChangeNum_Inscription = event => {   this.setState({ Num_Inscription: event.target.value }); }
handleChangeNiveau_universitaire = event => {   this.setState({Niveau_universitaire : event.target.value }); }
handleChangeNom_Ecole_Etudiant = event => {   this.setState({ Nom_Ecole_Etudiant: event.target.value }); }
handleChangeImage = event => {   this.setState({ Image: event.target.value }); }

onChangeselectecole(e){
  this.setState({[e.target.name]: e.target.value});
 }

 this.selectedFile= btoa(this.selectedFile); 
onSubmit = event => {
  event.preventDefault()

  var user = {
    Cin: this.state.Cin,
    Nom_Etudiant: this.state.Nom_Etudiant,
    Prénom_Etudiant: this.state.Prénom_Etudiant,
    Date_naissance: this.state.Date_naissance,
    Email: this.state.Email,
    Téléphone: this.state.Téléphone,
    Adresse_Etudiant: this.state.Adresse_Etudiant,
    Password: this.state.Password,
    Num_Inscription: this.state.Num_Inscription,
    Niveau_universitaire: this.state.Niveau_universitaire,
    Nom_Ecole_Etudiant: this.state.Nom_Ecole_Etudiant,
    Role: 'Etudiant',
    Image: this.state.Image,   
  
    
  };

console.log(user)

  axios.post('https://localhost:5001/Etudiant', user)
      .then((res) => {
console.log(res.data)
        this.props.history.push('/loginStudent');
      }).catch((error) => {
     
          console.log(error)
      });

      this.setState({ Cin: '', Nom_Etudiant: '', Prénom_Etudiant: '', Date_naissance: '', Email: '', Téléphone: '', Adresse_Etudiant: '', Password: '', Num_Inscription: '', Nom_Ecole_Etudiant: '', Image: '', })
    }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
               
                  <form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Nom_Etudiant} placeholder="Firstname" autoComplete="Firstname" onChange={this.handleChangeNom_Etudiant} /><Input type="text"  value={this.state.lastname} placeholder="Lastname" autoComplete="Lastname" onChange={this.handleChangePrénom_Etudiant}  />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-id-card-o"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.Cin} placeholder="Cin" autoComplete="Cin" onChange={this.handleChangeCin} />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" value={this.state.Email} placeholder="Email" autoComplete="email" onChange={this.handleChangeEmail} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"  value={this.state.Password} placeholder="Password" autoComplete="new-password" onChange={this.handleChangeMot_de_passe} />                       <Input type="password" placeholder="Repeat password" autoComplete="new-password" />

                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" value={this.state.Téléphone} placeholder="Phone" autoComplete="Phone" onChange={this.handleChangeTéléphone} /><InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"  value={this.state.Adresse_Etudiant} placeholder="Address" autoComplete="Address" onChange={this.handleChangeAdresse_Etudiant} />
                    </InputGroup>



                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input value={this.state.Date_naissance} type="date" onChange={this.handleChangeDate_naissance} />
                    </InputGroup>


                    

  
                    
                                  
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.Niveau_universitaire} placeholder="Level" autoComplete="Level" onChange={this.handleChangeNiveau_universitaire}/><Input type="text" value={this.state.inscriptionnumber} placeholder="Inscription Number" autoComplete="Inscription Number" onChange={this.handleChangeNum_Inscription}/>
                      </InputGroup>


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

        <div id="tunisdiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant"  >
              <option disabled selected>Select </option>
              <option value="fshst">Faculté des Sciences Humaines et Sociales de Tunis</option>
              <option value="essect ">Ecole Supérieure des Sciences Economiques et Commerciales de Tunis </option>
              <option value="ens">Ecole Normale Supérieure</option>
              <option value="esstt">Ecole Supérieure des Sciences et Techniques de Tunis</option>
              <option value="ipstt">Institut Préparatoire aux Etudes d'Ingénieurs de Tunis</option>
              <option value="ipelsht">Institut Préparatoire aux Etudes Littéraires et de Sciences Humaines de Tunis</option>
              <option value="isgt"> Institut Supérieur de Gestion de Tunis</option>
              <option value="isefc">Institut Supérieur de l'Education et de la Formation Continue</option>
              <option value="isbat">Institut Supérieur des Beaux Arts de Tunis</option>
              <option value="ism">Institut Supérieur de Musique</option>
              <option value="isad">Institut Supérieur d'Art Dramatique</option>
              <option value="isscmpt">Institut Supérieur des Sciences Culturelles et Métiers du Patrimoine de Tunis</option>
              <option value="iseaht">Institut Supérieur des Etudes Appliquées en Humanités de Tunis</option>
              <option value="isajc">Institut Supérieur de l'Animation pour la Jeunesse et la Culture</option>
              <option value="iseahz">Institut Supérieur des Études Appliquées en Humanités de Zaghouan</option>
              <option value="inp">Institut National du Patrimoine</option>
              <option value="tbs">Tunis Business School</option>
            </Input>
          </InputGroup>
        </div>
        <div id="manardiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option disabled selected>Select </option>
              <option value="fdspt">Faculté de Droit et des Sciences Politiques de Tunis</option>
              <option value="fsegt">Faculté des Sciences Economique et de Gestion de Tunis </option>
              <option value="fst">Faculté des sciences de tunis</option>
              <option value="fsm">Faculté de Médecine de Tunis</option>
              <option value="ensit">Ecole Nationale d'Ingénieurs de Tunis</option>
              <option value="iblv">Institut Bourguiba des Langues Vivantes</option>
              <option value="ipeim"> Institut Préparatoire aux Etudes d'Ingénieurs d'El Manar</option>
              <option value="issba">Institut Supérieur des Sciences Biologiques Appliquées</option>
              <option value="isi">Institut Supérieur d'Informatique d'El Manar</option>
              <option value="issht">Institut Supérieur des Sciences Humaines de Tunis</option>
              <option value="istm"> Institut Supérieur des Technologies Médicales</option>
              <option value="esstst">Ecole Supérieure des Sciences et Techniques de la Santé de Tunis</option>
              <option value="issit">Institut Supérieur des Sciences infirmières de Tunis</option>
              <option value="ip">Institut Pasteur</option>
              <option value="irvt">Institut de Recherche Vétérinaire de Tunis</option>

            </Input>
          </InputGroup>
        </div>


        <div id="manoubadiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option disabled selected>Select </option>
              <option value="flahm">Faculté des Lettres, des Arts et des Humanités de la Manouba</option>
              <option value="esstd">Ecole Supérieure des Sciences et Technologies du Design</option>
              <option value="esct">Ecole Supérieure de Commerce de Tunis</option>
              <option value="escem">Ecole Supérieure de Commerce Electronique de la Manouba</option>
              <option value="ensi">Ecole Nationale des Sciences de l'Informatique</option>
              <option value="isamm">Institut Supérieur des Arts du Multimédia de la Manouba</option>
              <option value="iscae">Institut Supérieur de Comptabilité et d'Administration des Entreprises</option>
              <option value="isbst">Institut Supérieur de Biotechnologie de Sidi Thabet</option>
              <option value="isdt">Institut Supérieur de Documentation de Tunis</option>
              <option value="ipsi">Institut de Presse et des Sciences de l'Information</option>
              <option value="enmvst">Ecole Nationale de Médecine Vétérinaire de Sidi Thabet</option>
              <option value="issepks">Institut Supérieur du Sport et de l'Education Physique de Ksar Saïd</option>
              <option value="isphks">Institut Supérieur de Promotion des Handicapés de Ksar Saïd</option>
              <option value="ishtc">Institut Supérieur de l'Histoire de la Tunisie Contemporaine</option>
            </Input>
          </InputGroup>
        </div>

        <div id="Soussediv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="fdseps">Faculté de Droit et des Sciences Economiques et Politiques de Sousse</option>
              <option value="fms">Faculté de Médecine de Sousse</option>
              <option value="flshs">Faculté des Lettres et des Sciences Humaines de Sousse </option>
              <option value="isffs">Institut Supérieur de Finance et de Fiscalité de Sousse</option>
              <option value="isitchs">Institut Supérieur d'Informatique et des Technologies de Communication de Hammam Sousse</option>
              <option value="istls">Institut Supérieur du Transport et de la Logistique de Sousse</option>
              <option value="isbas">Institut Supérieur de Beaux Arts de Sousse</option>
              <option value="esstss"> Ecole Supérieure des Sciences et Techniques de la Santé de Sousse</option>
              <option value="isgs"> Institut Supérieur de Gestion de Sousse</option>
              <option value="ihecs"> Institut des Hautes Etudes Commerciales de Sousse</option>
              <option value="isms"> Institut Supérieur de Musique de Sousse</option>
              <option value="issats"> Institut Supérieur des Sciences Appliquées et de Technologie de Sousse</option>
              <option value="enis"> Ecole Nationale d’Ingénieurs de Sousse</option>
              <option value="isacm"> Institut Supérieur Agronomique de Chott Mériem</option>
              <option value="issis"> Institut Supérieur des Sciences infirmières de Sousse</option>
              <option value="essths"> Ecole Supérieure des Sciences et des technologies de Hammam Sousse</option>
            </Input>
          </InputGroup>
        </div>

        <div id="Sfaxdiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="fsegs">Faculté des Sciences Economiques et de Gestion de Sfax  </option>
              <option value="fms">Faculté de Médecine de Sfax  </option>
              <option value="fds">Faculté de droit de Sfax</option>
              <option value="isam">Institut Supérieur des Arts et Métiers de Sfax</option>
              <option value="isecs">Institut Supérieur d'Electronique et de Communication de Sfax</option>
              <option value="isgis">Institut Supérieur de Gestion Industrielle de Sfax</option>
              <option value="ihecs">Institut des Hautes Etudes Commerciales de Sfax</option>
              <option value="fss">Faculté des Sciences de Sfax</option>
              <option value="enis">Ecole Nationale d'Ingénieurs de Sfax</option>
              <option value="escs">Ecole Supérieure de Commerce de Sfax</option>
              <option value="isaas">Institut Supérieur d'Administration des Affaires de Sfax</option>
              <option value="isims">Institut Supérieur d'Informatique et de Multimédia de Sfax</option>
              <option value="isms">Institut Supérieur de Musique de Sfax</option>
              <option value="ipeis">Institut Préparatoire aux Etudes d'Ingénieurs de Sfax</option>
              <option value="isseps">Institut Supérieur du Sport et de l'Education Physique de Sfax</option>
              <option value="isbs">Institut Supérieur de Biotechnologies de Sfax</option>
              <option value="flsh">Faculté des Lettres et Sciences Humaines de Sfax</option>
              <option value="izs">Institut Zitouna de Sfax</option>
              <option value="esstss">Ecole Supérieure des Sciences et Techniques de la Santé de Sfax</option>
              <option value="issis">Institut Supérieur des Sciences infirmières de Sfax  </option>
            </Input>
          </InputGroup>
        </div>

        <div id="Mahdiadiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="fsm">Faculté des Sciences de Monastir</option>
              <option value="fmm">Faculté de Médecine de Monastir</option>
              <option value="isimm">Institut Supérieur d'Informatique et de Mathématiques de Monastir</option>
              <option value="fmdm">Faculté de Médecine Dentaire de Monastir</option>
              <option value="ppm">Faculté de Pharmacie de Monastir</option>
              <option value="fsehm">Faculté des Sciences Economiques et de Gestion de Mahdia</option>
              <option value="enim">Ecole Nationale d'Ingénieurs de Monastir</option>
              <option value="isbm">Institut Supérieur de Biotechnologie de Monastir</option>
              <option value="ipeim">Institut Préparatoire aux Etudes d'Ingénieurs de Monastir</option>
              <option value="esstsm">Ecole Supérieure des Sciences et Techniques de la Santé de Monastir</option>
              <option value="iseahm">Institut Supérieur des Etudes Appliquées en Humanités de Mahdia</option>
              <option value="ismmm">Institut Supérieur des Métiers de la Mode de Monastir</option>
              <option value="isim">Institut Supérieur d'Informatique de Mahdia</option>
              <option value="isamm">Institut Supérieur des Arts et Métiers de Mahdia</option>
              <option value="issatm">Institut Supérieur des Sciences Appliquées et de Technologie de Mahdia</option>
              <option value="ismaatm">Institut Supérieur des Langues Appliquées aux Affaires et au Tourisme de Moknine</option>
            </Input>
          </InputGroup>
        </div>
        <div id="Ez_Zitounadiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="isstt"> Institut Supérieur de Théologie de Tunis</option>
              <option value="isscit">Institut Supérieur de Civilisation Islamique de Tunis</option>
              <option value="ceik">Centre de Études Islamiques de Kairouan</option>
            </Input>
          </InputGroup>
        </div>
        <div id="virtuelldiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="isefc"> Institut Supérieur de l'Education et de la Formation Continues</option>
            </Input>
          </InputGroup>
        </div>
        <div id="Gafsadiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="fsg">  Faculté des Sciences de Gafsa</option>
              <option value="iseahg">  Institut Supérieur des Etudes Appliquées en Humanités de Gafsa</option>
              <option value="isaeg">  Institut Supérieur d 'Administration des Entreprises de Gafsa</option>
              <option value="issatg">  Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa</option>
              <option value="isamg">  Institut Supérieur d'Arts et Métiers de Gafsa</option>
              <option value="issteg">  Institut Supérieur des Sciences et des Technologies de l’énergie de Gafsa</option>
              <option value="iseaht">  Institut Supérieur des Etudes Appliquées en Humanités de Tozeur</option>
              <option value="ipeig">  Institut Préparatoire aux Etudes d’Ingénieur de Gafsa</option>
              <option value="isseps">  Institut Supérieur du Sport et de l’Education Physique de Gafsa</option>
            </Input>
          </InputGroup>
        </div>
        <div id="Isetdiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="isetSfax"> Institut Supérieur des Etudes Technologiques de Sfax</option>
              <option value="isetKebili"> Institut Supérieur des Etudes Technologiques de Kebili</option>
              <option value="isetGabès"> Institut Supérieur des Etudes Technologiques de Gabès</option>
              <option value="isetDjerba"> Institut Supérieur des Etudes Technologiques de Djerba</option>
              <option value="isetKef"> Institut Supérieur des Etudes Technologiques de Kef</option>
              <option value="isetZaghouan"> Institut Supérieur des Etudes Technologiques de Zaghouan</option>
              <option value="isetSousse"> Institut Supérieur des Etudes Technologiques de Sousse</option>
              <option value="isetMahdia"> Institut Supérieur des Etudes Technologiques de Mahdia</option>
              <option value="isetSiliana"> Institut Supérieur des Etudes Technologiques de Siliana</option>
              <option value="isetRadès"> Institut Supérieur des Etudes Technologiques de Radès</option>
              <option value="isetNabeul"> Institut Supérieur des Etudes Technologiques de Nabeul</option>
              <option value="isetSidi Bouzid<"> Institut Supérieur des Etudes Technologiques de Sidi Bouzid</option>
              <option value="isetcom"> Institut Supérieur des Etudes Technologiques en Communications (El Ghazala)</option>
              <option value="isetKairouan"> Institut Supérieur des Etudes Technologiques de Kairouan</option>
              <option value="isetGafsa"> Institut Supérieur des Etudes Technologiques de Gafsa</option>
              <option value="isetBéja"> Institut Supérieur des Etudes Technologiques de Béja</option>
              <option value="isetCharguia"> Institut Supérieur des Etudes Technologiques de Charguia</option>
              <option value="isetJendouba"> Institut Supérieur des Etudes Technologiques de Jendouba</option>
              <option value="isetKasserine"> Institut Supérieur des Etudes Technologiques de Kasserine</option>
              <option value="isetKsar Hellal"> Institut Supérieur des Etudes Technologiques de Ksar Hellal</option>
              <option value="isetTataouine"> Institut Supérieur des Etudes Technologiques de Tataouine</option>
              <option value="isetTozeur"> Institut Supérieur des Etudes Technologiques de Tozeur</option>
              <option value="isetbBizerte"> Institut Supérieur des Etudes Technologiques de Bizerte</option>
              <option value="isetMédenine"> Institut supérieur des Etudes Technologiques de Médenine</option>
            </Input>
          </InputGroup>
        </div>
        <div id="Jandoubadiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="">Faculté des Sciences Juridiques, Economiques et de Gestion de Jendouba</option>
              <option value="iseahk">Institut Supérieur des Etudes Appliquées en Humanités du Kef</option>
              <option value="islaib">Institut Supérieur des Langues Appliquées et d'Informatique de Béja</option>
              <option value="isshj">Institut Supérieur des Sciences Humaines de Jendouba</option>
              <option value="isams">Institut Supérieur des Arts et Métiers de Siliana</option>
              <option value="ismtk">Institut Supérieur de Musique et de Théâtre du Kef</option>
              <option value="isepk">Institut Supérieur de l 'Education Physique du Kef</option>
              <option value="esak">Ecole Supérieure d 'Agriculture du Kef</option>
              <option value="ispt">Institut Sylvo-Pastoral de Tabarka</option>
              <option value="esier">Ecole Supérieure des Ingénieurs de l'Equipement Rural de Medjez El Bab</option>
              <option value="isik">Institut supérieur de l'informatique du Kef</option>
              <option value="isbb">Institut supérieur de biotechnologie de Béja</option>
              <option value="issik">Institut Supérieur des Sciences infirmières du Kef</option>
            </Input>
          </InputGroup>
        </div>
        <div id="Gabesdiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value=""> Faculté des Sciences de Gabès</option>
              <option value="enig">Ecole Nationale d'Ingénieurs de Gabès</option>
              <option value="isgg">Institut Supérieur de Gestion de Gabès</option>
              <option value="islg">Institut Supérieur des Langues de Gabès</option>
              <option value="isamg">Institut Supérieur des Arts et Métiers de Gabès</option>
              <option value="isbam">Institut Supérieur de Biologie Appliquée de Medenine</option>
              <option value="isejg">Institut Supérieur des Etudes Juridiques de Gabès</option>
              <option value="isimg">Institut Supérieur d 'Informatique et de Multimédia de Gabès</option>
              <option value="issatg">Institut Supérieur des Sciences Appliquées et de Technologie de Gabès</option>
              <option value="issteg">Institut Supérieur des Sciences et Techniques des Eaux de Gabès</option>
              <option value="issig">Institut Supérieur des Systèmes Industriels de Gabès</option>
              <option value="iseahm">Institut Supérieur des Etudes Appliquées en Humanités de Médenine</option>
              <option value="isim">Institut Supérieur d'Informatique de Medenine</option>
              <option value="isamt">Institut Supérieur des Arts et Métiers de Tataouine</option>
              <option value="issig">Institut Supérieur des Sciences infirmières de Gabès</option>
            </Input>
          </InputGroup>
        </div>


        <div id="Kairouandiv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >
              <option value="flsh">  Faculté des Lettres et des Sciences Humaines de Kairouan</option>
              <option value="isamk"> Institut Supérieur des Arts et Métiers de Kairouan</option>
              <option value="isigk"> Institut Supérieur d 'Informatique et de Gestion de Kairouan</option>
              <option value="isejpk"> Institut Supérieur des Etudes Juridiques et Politiques de Kairouan</option>
              <option value="issatk"> Institut Supérieur des Sciences Appliquées et de Technologie de Kairouan</option>
              <option value="isamk"> Institut Supérieur des Arts et Métiers de Kasserine</option>
              <option value="ismaik"> Institut Supérieur des Mathématiques Appliquées et de l'Informatique de Kairouan</option>
              <option value="iseashs"> Institut Supérieur des Etudes Appliquées en Sciences Humaines de Sbeïtla</option>
              <option value="isamsb"> Institut Supérieur des Arts et Métiers de Sidi Bouzid</option>
            </Input>
          </InputGroup>
        </div>


        <div id="carthagediv" style={{ display: 'none' }} >
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-graduation"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" onChange={this.onChangeselectecole} name="Nom_Ecole_Etudiant" >

            </Input>
          </InputGroup>
        </div>









                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camera"></i>
                        </InputGroupText>
                      </InputGroupAddon> <input type="file" value={this.state.Image} id="avatar" name="avatar" accept="image/png, image/jpeg, image/jpg " onChange={this.handleChangeImage}/>
                    </InputGroup>


                    <Button type="submit" color="info" block>Create Account</Button>
                  </form>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RegisterStudent;
