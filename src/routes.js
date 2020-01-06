import React from 'react';

const Profil = React.lazy(() => import('./views/Pages/Profil'));
const Updateprofil = React.lazy(() => import('./views/Pages/Updateprofil'));
const AddUniversity = React.lazy(() => import('./views/Pages/AddUniversity'));
const ClubProfil = React.lazy(() => import('./views/Pages/ClubProfil'));
const AddEstablishment = React.lazy(() => import('./views/Pages/AddEstablishment'));
const Eventlist = React.lazy(() => import('./views/Pages/Eventlist'));




const routes = [

  { path: '/dashboard/profil', name: 'Profil', component: Profil },
  { path: '/dashboard/updateprofil' , name: 'Updateprofil', component: Updateprofil},
  { path: '/dashboard/addUniversity' , name: 'AddUniversity', component: AddUniversity},
  { path: '/dashboard/addestablishment' , name: 'AddEstablishment', component: AddEstablishment},
  { path: '/dashboard/getAllEvents' , name: 'Eventlist', component: Eventlist},
  { path: '/dashboard/clubprofil' , name: 'ClubProfil', component: ClubProfil},
 



];

export default routes;
