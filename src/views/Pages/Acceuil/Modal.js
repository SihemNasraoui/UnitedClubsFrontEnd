import React from "react";
import ReactDOM from"react-dom"

class Modal1 extends React.Component{
  componentDidMount(){
    console.log("ggg");
  }
  render(){
    return (
      <Modal
      className="modal-dialog-centered "
   
      isOpen={this.state.defaultModal}
      toggle={() => this.toggleModal("defaultModal")}
    >
      <div className="modal-header">
        <h1 className="modal-title" id="modal-title-notification">
          Your are ...
        </h1>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={() => this.toggleModal("defaultModal")}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
      <Row>
<Col>
<a href="http://localhost:3002/#/club">
        <img
          alt="..."
          height="150"
          src={require("../../../assets/img/brand/Bus.png")}
        /><h2 className="modal-title">   &nbsp;&nbsp;&nbsp;CLUB</h2>
</a>

</Col>
<Col>
<a href="http://localhost:3001/#/dashboard">
        <img
          alt="..."
          height="150"
          src={require("../../../assets/img/brand/im.png")}
        /><h2 className="modal-title" >  &nbsp;&nbsp; USERS</h2>
</a>    </Col>
</Row>
      </div>
      <div className="modal-footer">
      
        <Button
          className="text-white ml-auto"
          color="link"
          data-dismiss="modal"
          type="button"
          onClick={() => this.toggleModal("defaultModal")}
        >
          Close
        </Button>
      </div>
    </Modal>
);
}}
export default Modal1;




