import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Profil = React.lazy(() => import('./views/Pages/Profil'));
const Updateprofil = React.lazy(() => import('./views/Pages/Updateprofil'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profil', name: 'Profil', component: Profil },
  { path: 'updateprofil' , name: 'Updateprofil', component: Updateprofil},
];

export default routes;
