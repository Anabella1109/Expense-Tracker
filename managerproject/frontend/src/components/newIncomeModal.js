import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewIncomeForm from "./new_income";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faRectangleXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

class NewIncomeModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const categories=this.props.categories;
    console.log(this.categories);
    const create = this.props.create;

    var title = "Editing Income";
    var button = <Button onClick={this.toggle} style={{backgroundColor:'White',color:'Black',border:"none"}}><FontAwesomeIcon icon={faPen} /></Button>;
    if (create) {
      title = "Creating New Income";

      button = (
        <Button
          color=""
          className="float-right but"
          onClick={this.toggle}
          style={{ minWidth: "200px",backgroundColor:'White',color:'Black' ,boxShadow:"0px 10px 15px rgba(0,0,0,0.1)" }}
        >
        <FontAwesomeIcon icon={faPlus} />
        </Button>
      );
    }
    console.log(this.props.categories);
    return (
      
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewIncomeForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              income={this.props.income}
              categories={this.props.categories}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewIncomeModal;