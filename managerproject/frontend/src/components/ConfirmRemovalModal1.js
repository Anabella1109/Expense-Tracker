import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";
import { API_URL3 } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen, faXmark } from '@fortawesome/free-solid-svg-icons'

class ConfirmRemovalModal1 extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteIncome = pk => {
    axios.delete(API_URL3 + pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    return (
      <Fragment>
        <Button color="" onClick={() => this.toggle()}>
        <FontAwesomeIcon icon={faXmark} />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really wanna delete the expense?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteIncome(this.props.pk)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal1;