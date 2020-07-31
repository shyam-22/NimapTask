


import React from "react";
import ReactDom, { render } from "react-dom" 
import {Redirect} from 'react-router-dom'


class Home extends React.Component {
    constructor(props) {
      super(props);
      const token = localStorage.getItem("token")
      let loggedIn = true
      if(token== null)
      {
        loggedIn = false;
      }
      this.state= {loggedIn}

      this.state = {value: 'coconut'};
      this.handleChange = this.handleChange.bind(this);
    
    }
  
    handleChange(event) 
    {    
        this.setState({value: event.target.value}); 
    }

    render() {
      if(this.state.loggedIn === false)
      {
        return <Redirect to="/login" />  
      }

      return (
          <div className="container">
          
            <select value={this.state.value} onChange={this.handleChange}>    
                {/* <option disabled hidden selected>Select</option> */}
                <option value="Nepal">Nepal</option>
                <option value="Bhuttan">Bhuttan</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
            </select>
        
          </div>
        
      );
    }
  }
 
  export default Home;

