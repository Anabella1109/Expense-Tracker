import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewExpenseForm from "./NewExpense";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faRectangleXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

class NewExpenseModal extends Component {
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

    var title = "Editing Expense";
    var button = <Button onClick={this.toggle} style={{backgroundColor:'White',color:'Black',border:"none"}}><FontAwesomeIcon icon={faPen} /></Button>;
    if (create) {
      title = "Creating New Expense";

      button = (
        <Button
          color=""
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px",backgroundColor:'White',color:'Black' ,boxShadow:"0px 10px 15px rgba(0,0,0,0.1)" }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewExpenseForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              income={this.props.income}
              categories={this.props.categories}
              incomes={this.props.incomes}
              expenses={this.props.expenses}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewExpenseModal;