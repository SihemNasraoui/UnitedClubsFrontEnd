import React from 'react';

const Profil = React.lazy(() => import('./views/Pages/Profil'));
const Updateprofil = React.lazy(() => import('./views/Pages/Updateprofil'));
const AddUniversity = React.lazy(() => import('./views/Pages/AddUniversity'));
const ClubProfil = React.lazy(() => import('./views/Pages/ClubProfil'));
const AddEstablishment = React.lazy(() => import('./views/Pages/AddEstablishment'));
const Eventlist = React.lazy(() => import('./views/Pages/Eventlist'));




const routes = [

  { path: '/dashboard/profil', name: 'Profil', component: Profil },
  { path: '/dashboard/updateprofil' , name: 'Update profil', component: Updateprofil},
  { path: '/dashboard/addUniversity' , name: 'Add University', component: AddUniversity},
  { path: '/dashboard/addestablishment' , name: 'Add Establishment', component: AddEstablishment},
  { path: '/dashboard/getAllEvents' , name: 'Event list', component: Eventlist},
  { path: '/dashboard/clubprofil' , name: 'Club Profil', component: ClubProfil},
 



];

export default routes;
