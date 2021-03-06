import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewExpenseCategoryForm from "./NewExpenseCategory";

class NewExpenseCategoryModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Expense Category";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Expense Category";

      button = (
        <Button
          color=""
          className="float-left but"
          onClick={this.toggle}
          style={{ minWidth: "170px",backgroundColor:'White',color:'Black' ,fontSize:"12px",marginTop:"-100px", marginLeft:"-10px" }}
        >
          <span>New Expense category</span>
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewExpenseCategoryForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              category={this.props.category}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewExpenseCategoryModal;