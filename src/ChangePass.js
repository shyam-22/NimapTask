import React, { Component } from "react"
import {Redirect} from 'react-router-dom'
import {Link} from "react-router-dom"

export default class ChangePass extends Component{
    constructor(props){
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token== null)
        {
          loggedIn = false;
        }
        this.state = {
            username: "",
            password: "",
            loggedIn
        }
        this.handleChange= this.handleChange.bind(this)
        this.handelSubmit= this.handelSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handelSubmit(e){
        e.preventDefault()
        const {username,password} = this.state

        if(password.length < 8)
        {
            alert(`Password should be minimum 8 character`)
        }

        if(username === "shyam123" && password === "12345678")
        {
            localStorage.setItem("token","12345")
            this.setState({loggedIn:true})
        }

    }
    render(){
        if(this.state.loggedIn)
        {
            return <Redirect to="/home"/>
        }
        return(
        <div className="container col-md-8 offset-md-2">
            <form onSubmit={this.handelSubmit}>

                <div className="form-group">
                <label>UserName </label>
                <input type="text" value={this.state.username} name="username"  onChange={this.handleChange} className="form-control"/> 
                </div>
            
                <div className="form-group">
                <label>New Password</label>
                <input type="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>    
                </div>
            
                <button className="btn button-outline btn-dark" >SUBMIT</button>  
                      
            </form>
        </div>
            
        )
    }
}  