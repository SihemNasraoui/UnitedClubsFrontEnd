import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Forgetpassword = React.lazy(() => import('./views/Pages/Forgetpassword'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const Verification = React.lazy(() => import('./views/Pages/Verification'));
const Accueil = React.lazy(() => import('./views/Pages/Acceuil'));
const AddClub = React.lazy(() => import('./views/Pages/Club'));
class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
            <Route  path="/Accueil" name="Accueil" render={props => <Accueil {...props}/>} />
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/Forgetpassword" name="forget page" render={props => <Forgetpassword {...props}/>} />
            <Route exact path="/Verification" name="Verification page" render={props => <Verification {...props}/>} />
              <Route exact path="/createProfil" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/AddClub" name="Add Club Page" render={props => <AddClub {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route  path="/dashboard" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
