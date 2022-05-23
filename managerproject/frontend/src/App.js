import React, { Component, Fragment } from "react";
import Header from "./components/header";
import Home from "./components/Home";
import HomeCategory from "./components/Home1";
import HomeExpenseCategory from "./components/Home2";
import HomeExpense from "./components/Home3";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
        <HomeCategory />
        <HomeExpenseCategory />
        <HomeExpense />
      </Fragment>
    );
  }
}

export default App;
