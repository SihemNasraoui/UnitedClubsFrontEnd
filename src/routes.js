import React from 'react';


const AddUniversity = React.lazy(() => import('./views/Pages/AddUniversity'));
const ClubProfil = React.lazy(() => import('./views/Pages/ClubProfil'));
const AddEstablishment = React.lazy(() => import('./views/Pages/AddEstablishment'));
const Eventlist = React.lazy(() => import('./views/Pages/Eventlist'));
const ProfilSponsor = React.lazy(() => import('./views/Pages/ProfilSponsor'));
const ProfilAdministrateur = React.lazy(() => import('./views/Pages/ProfilAdministrateur'));
const ProfilStudent = React.lazy(() => import('./views/Pages/ProfilStudent'));
const AddEvent = React.lazy(() => import('./views/Pages/AddEvent'));
const UpdateprofilClub = React.lazy(() => import('./views/Pages/UpdateprofilClub'));

const routes = [

  { path: '/dashboard/addUniversity' , name: 'Add University', component: AddUniversity},
  { path: '/dashboard/addestablishment' , name: 'Add Establishment', component: AddEstablishment},
  { path: '/dashboard/getAllEvents' , name: 'Event list', component: Eventlist},
  { path: '/dashboard/clubprofil' , name: 'Club Profil', component: ClubProfil},
  { path: '/dashboard/profilSponsor' , name: 'Sponsor Profil', component: ProfilSponsor},
  { path: '/dashboard/profilAdministrateur' , name: 'Profil Administrateur ', component: ProfilAdministrateur},
  { path: '/dashboard/profilStudent' , name: 'Student Profil', component: ProfilStudent},
  { path: '/dashboard/AddEvent' , name: 'Add Event', component: AddEvent},
  { path: '/dashboard/updateprofilClub' , name: 'Update profil Club', component: UpdateprofilClub},
];

export default routes;
