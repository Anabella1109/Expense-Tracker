import React, { Component } from "react";
import '../index.css';
import { Link } from "react-router-dom";
import HomeCategory from "./Home1";
import HomeExpenseCategory from "./Home2";

class SideNavBar extends Component{
	render(){
		return(
			<div className="container containe">
                  
                  <ul className="sidebar">
                  <li><span>Dashboard</span></li>
                   <li><span><i className="fa fa-home"></i></span><span>Home</span></li>
                   <li><span><i className="fa fa-dashboard"></i></span><span>Expenses</span></li>
                   
                   <HomeCategory />
                   <HomeExpenseCategory />
                   {/* <li><Link to="/expenses">Expenses</Link></li> */}
                   {/* <li><span><i className="fa fa-users"></i></span><span>Users</span></li> */}
                   {/* <li><span><i className="fa fa-shopping-cart"></i></span><span>Products</span></li>
                   <li><span><i className="fa fa-bookmark"></i></span><span>Bookmarks</span></li>
                   <li><span><i className="fa fa-gear"></i></span><span>Settings</span></li> */}
                   
                   
                  </ul>
                  
                  <div className="content">
                     
                  </div>
          </div>
		)
	}
}

export default SideNavBar;