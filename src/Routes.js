import React from "react"

import {BrowserRouter,Switch,Route} from "react-router-dom"  

//BrowserRouter is main wrapper
//BrowserRouter is a component (this will wrap rest of the routes files)
//{ this will make props available to other nested Components }

import Login from "./user/Login"
import Home from "./child/Home"
import Task from "./child/Task"
import User from "./child/User"
import Menu from "./child/Menu"

const Routes = () => {
    return(
        <BrowserRouter>
        <Menu/>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/task" exact component ={Task}/>
                <Route path="/user" exact component ={User}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
