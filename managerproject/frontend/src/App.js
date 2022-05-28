import React, { Component, Fragment } from "react";
import Header from "./components/header";
import Home from "./components/Home";

import HomeExpense from "./components/Home3";
import NavBar from "./components/navbar";
import SideNavBar from "./components/sidenavabar";
import { Col, Container, Row } from "reactstrap";
import Balance from "./components/Balance"


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        {/* <Container> */}
        <div className="row">
          <div className="col-md-3">
          <SideNavBar />

          </div>
          <div className="col-md-8">
            {/* <Balance /> */}
          <Home />
            <HomeExpense />
           
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* <Row>
        <Col> */}
        {/* </Col> */}
        {/* <Col> */}
        
        {/* </Col> */}
        {/* <Col>
      </Col> */}
        {/* </Row> */}
        {/* </Container>  */}
           
            {/* <Header /> */}
            
        
      </Fragment>
    );
  }
}

export default App;
