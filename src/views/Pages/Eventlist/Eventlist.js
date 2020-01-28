import React, { Component } from 'react';
import logo from '../../../assets/img/brand/jeune.png';
import reactf from '../../../assets/img/brand/react.jpg';
import meet from '../../../assets/img/brand/meet.jpg';
import open from '../../../assets/img/brand/open.png';

import {  AppNavbarBrand } from '@coreui/react';
import{Row , Col} from 'reactstrap';
import { Card, CardBody ,CardHeader,CardFooter,CardImg ,Breadcrumb,Form,FormGroup,InputGroup,InputGroupAddon,Button,Input} from 'reactstrap';
function EventCard (props) {
  const imgStyle = {
    maxHeight: 190,
    maxWidth: 225
  }
    return(
      <Col xs="12" sm="6" md="4">
      <Card>
      <CardImg top style={imgStyle} src={props.logo} className="card-img-top .img-fluid" alt="..." />

        <CardHeader>
        {props.name}
        </CardHeader>
        <CardBody>

          {props.description}
        </CardBody>
        <CardFooter><p>{props.date}   /  {props.lieu}</p></CardFooter>
      </Card>
    </Col>
    );
  
}
function handleRecherche(){console.log('hhh')}
class Eventlist extends Component {
  render() {
    return (
      <div className="">
        <Breadcrumb>
        <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                     <Col xs="12">

                      <InputGroup floatleft>
                        
                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="Username" />
                     
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" onClick={handleRecherche()}><i className="fa fa-search"></i> Search</Button>
                        </InputGroupAddon> </InputGroup>
                      </Col>
                  </FormGroup>
                  </Form>
        </Breadcrumb>
        <Row>    
        <EventCard logo={logo} name="j2i" description="ggg" date="15/07/2020" lieu="isamm"/>       
   <EventCard logo={logo} name="clli" description="gfffffggg" date="15/07/2020" lieu="ensi" /> <EventCard logo={logo} name="j2i" description="ggg" date="15/07/2020" lieu="isamm"/>       
   <EventCard logo={reactf} name="clli" description="gfffffggg" date="15/07/2020" lieu="ensi" /> <EventCard logo={logo} name="j2i" description="ggg" date="15/07/2020" lieu="isamm"/>       
   <EventCard logo={logo} name="clli" description="gfffffggg" date="15/07/2020" lieu="ensi" /> <EventCard logo={logo} name="j2i" description="ggg" date="15/07/2020" lieu="isamm"/>       
   <EventCard logo={logo} name="clli" description="gfffffggg" date="15/07/2020" lieu="ensi" />      </Row>
            </div>
 
   );
      }
    }
export default Eventlist;