import React,{useState} from "react";
import {ChangePass} from "../ChangePass"
import {Redirect} from "react-router-dom"

const User = () => {
    const [values,setValue] = useState({
        username: "",
        password: ""
    })

    const handleChange = name=> event=> {
        setValue({...values,[name]: event.target.value})
    }

    return(
           <div className="container col-md-6 offset-md-3">
               <label>UserName</label>
               <input type="text" className="form-control" onChange={handleChange('username')}/>
    
               <label>Password</label>
               <input type="password" className="form-control" onChange={handleChange('password')}/>
          

           <button className="btn btn-aqua">Change Password</button> 
           <button className="btn btn-dark">LogOut</button> 
       </div>
   )
}


export default User;