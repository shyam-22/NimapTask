import React from "react"

import {Link, withRouter} from "react-router-dom"

import Login from "../user/Login"
const isActive = (history,path) => {
    if(history.location.pathname === path)
    {
        return{color : "blue"};
    }
    else
    {
        return {color : "white"};
    }
} ;
 const Menu = ({history}) => (
     <div>
         <ul className="nav nav-tabs bg-dark ">

            <li className="nav-item">
            <Link className="nav-link" style={isActive(history,'/login')} to="/login">Login</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" style={isActive(history,'/home')} to="/home">Home</Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history,'/task')} to="/task">Task</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" style={isActive(history,'/user')} to="/user">User</Link>
            </li>
            
            
         </ul>
            

     </div>
 )

export default withRouter(Menu);