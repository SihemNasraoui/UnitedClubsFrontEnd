import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_navclub';
import navigation1 from '../../_navetud';
import navigation2 from '../../_navspons'
import navigation3 from '../../_navadmin';
// routes config
import routes from '../../routes';

//<Redirect from='/' to="/dashboard" />  


const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


class DefaultLayout extends Component {
  constructor(props) {
    super(props)
    this.state = JSON.parse(localStorage.getItem("user"))
    this.token= JSON.parse(localStorage.getItem("token"))
    this.currentUser =  this.state.role
    console.log(this.currentUser)
    
 
   
  }
  
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    localStorage.clear()
    this.props.history.push('/Accueil')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            {
              this.currentUser === "Club" ? (
    <AppSidebarNav  navConfig={navigation} {...this.props} router={router}/>
      ) : this.currentUser === "Etudiant" ? (
        <AppSidebarNav navConfig={navigation1} {...this.props} router={router}/>

      ) : this.currentUser === "Sponsor" ?(
      <AppSidebarNav navConfig={navigation2} {...this.props} router={router}/>
      ): this.currentUser === "Administateur" ?(
        <AppSidebarNav navConfig={navigation3} {...this.props} router={router}/>
        ):("") }
           
            
              
        
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          
          <main className="main">
              <br/><br/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
               
             
                </Switch>
              </Suspense>
            </Container>
          </main>

          
          
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
