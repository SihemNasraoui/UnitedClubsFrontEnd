import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'



const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props) {
    super(props)
    this.state = JSON.parse(localStorage.getItem("user"))
    this.token= JSON.parse(localStorage.getItem("token"))
    this.currentUser = "Club"
    console.log(this.currentUser)
    
 
   
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 125 , height: 100, alt: 'united Club' }}
          minimized={{ src: logo, width: 30, height: 30, alt: 'United Club' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
      
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>   
             
              {
              this.currentUser === "Club" ? (
                  <DropdownItem><i className="fa fa-user"></i> <NavLink to="/dashboard/clubprofil">Profil</NavLink></DropdownItem> 
            ): this.currentUser === "Etudiant" ? (
                  <DropdownItem><i className="fa fa-user"></i> <NavLink to="/dashboard/profilStudent">Profil</NavLink></DropdownItem>
              ) : this.currentUser === "Sponsor" ?(
                  <DropdownItem><i className="fa fa-user"></i> <NavLink to="/dashboard/profilSponsor">Profil</NavLink></DropdownItem>
              ): this.currentUser === "Administateur" ?(
                  <DropdownItem><i className="fa fa-user"></i> <NavLink to="/dashboard/profilAdministrateur">Profil</NavLink></DropdownItem>
              ):("") 
              }


   
{
              this.currentUser === "Club" ? (
                <DropdownItem><i className="fa fa-wrench"></i>  <NavLink to="/dashboard/updateprofilClub">Update profil</NavLink></DropdownItem>
            ): this.currentUser === "Etudiant" ? (
                  <DropdownItem><i className="fa fa-wrench"></i>  <NavLink to="/dashboard/updateprofilStudent">Update profil</NavLink></DropdownItem>
              ) : this.currentUser === "Sponsor" ?(
                  <DropdownItem><i className="fa fa-wrench"></i>  <NavLink to="/dashboard/updateprofilSponsor">Update profil</NavLink></DropdownItem>
              ): this.currentUser === "Administateur" ?(
                  <DropdownItem><i className="fa fa-wrench"></i>  <NavLink to="/dashboard/updateprofilAdministrateur">Update profil</NavLink></DropdownItem>
              ):("") 
              }

              

              <DropdownItem><i className="fa fa-bell-o"></i> Notifications<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Desactivate Account</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
