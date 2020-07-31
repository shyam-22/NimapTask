import React,{Component} from "react";

class Task extends Component{
    constructor(props){
        super(props)
        this.state = {
            items : [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded : true,
                items: json
            })
        })
    }


    render(){

        var {isLoaded,items} = this.state;
        if(!isLoaded)
        {
            return <div>Loading.....</div>
        }

        else{
            return( 
                <div className="container">
                    <form className= "form-group">
                    <ul form-control>
                   {items.map(item =>(
                    <li  className= "form-control" key={item.id}>
                       {item.id} {item.title} | completed: {item.completed} 
                       <button type="button" class="btn btn-danger">Delete</button>
                    </li>
                   ))};
               </ul>
                    </form>
                   
                    <button type="button" class="btn btn-danger">Danger</button>
                </div>
                           )
        }
    }
    
        }
        
export default Task;