import React, { Component } from "react";

class Header extends Component {
  render() {
  const divStyle = {
    backgroundImage:'url("")',
    backgroundColor:'#313438',
    color:'white'
      
    };
    return (
      <div className="text-center" style={divStyle}>
        <h1 style={{color:'blanchedalmond',fontSize:40}}>Company name</h1>
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1 style={{color:'blanchedalmond',fontSize:40}}>Expense Tracker</h1>
      </div>
      );
    }
  }

  export default Header;