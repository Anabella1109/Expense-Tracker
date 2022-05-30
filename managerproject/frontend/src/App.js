import React, { Component, Fragment } from "react";
import Header from "./components/header";
import Home from "./components/Home";

import HomeExpense from "./components/Home3";
import NavBar from "./components/navbar";
import SideNavBar from "./components/sidenavabar";
import { Col, Container, Row } from "reactstrap";
import Balance from "./components/Balance"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
    <Router>
      <Fragment>
        <NavBar/>
       
        <div className="row">
          <div className="col-md-3">
          <SideNavBar />

          </div>
          <div className="col-md-8">
            <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/expenses" element={<HomeExpense />} /> 
              
            </Routes>
          </div>
          <div className="col-md-1"></div>
        </div>
        
        
            
        
      </Fragment>
      </Router>
    
    );
  }
}

export default App;
