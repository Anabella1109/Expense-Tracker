import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewIncomeForm from "./new_income";

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
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Income";

      button = (
        <Button
          color=""
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px",backgroundColor:'#6a7585',color:'white'  }}
        >
         Add New
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