import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewIncomeCategoryForm from "./NewIncomeCategory";

class NewIncomeCategoryModal extends Component {
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

    var title = "Editing Income Category";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Income Category";

      button = (
        <Button
          color=""
          className="float-right but"
          onClick={this.toggle}
          style={{ minWidth: "170px",backgroundColor:'White',color:'Black' ,fontSize:"12px",marginTop:"-100px",marginLeft:"-10px" }}
        >
           <span>New Income category</span>
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewIncomeCategoryForm
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

export default NewIncomeCategoryModal;