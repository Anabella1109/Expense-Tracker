import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Company Name</h1>
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>Expense Tracker</h1>
      </div>
      );
    }
  }

  export default Header;