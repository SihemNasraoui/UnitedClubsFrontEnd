import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Profil = React.lazy(() => import('./views/Pages/Profil'));
const Updateprofil = React.lazy(() => import('./views/Pages/Updateprofil'));
const AddUniversity = React.lazy(() => import('./views/Pages/AddUniversity'));
const ClubProfil = React.lazy(() => import('./views/Pages/ClubProfil'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profil', name: 'Profil', component: Profil },
  { path: '/updateprofil' , name: 'Updateprofil', component: Updateprofil},
  { path: '/addUniversity' , name: 'AddUniversity', component: AddUniversity},
  { path: '/clubprofil' , name: 'ClubProfil', component: ClubProfil},
];

export default routes;
