import React from 'react';
import axios from 'axios';
import {Redirect, Link} from "react-router-dom";
import About from './about.js';
import Home from './home.js'
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reDirect: "",
      name : "",
      username : "",
      password : "",
      nameerror : false,
      passworderror : false
    };
    //this.onClickButton= this.onClickButton.bind(this);
  }
  onClickButton= (e) => {
    if(this.state.username != "" && this.state.password != "")
    {
        let name = e.target.name;
        this.setState({reDirect : name});
    }
    else{
        this.setState({namerror:true,passworderror:true});
    }
  }
  onChangeOfValue(event){
      this.setState({name : event.target.name});
      if(this.state.name == "username"){
        this.state.username = event.target.value;
      }
      if(this.state.name == "password"){
        this.state.password = event.target.value;
      }
  }
  render(){
    if(this.state.reDirect!=""){
      var url = '/'+this.state.reDirect;
      return <Redirect to={url} />
  }
    return(
      <div>
        <h3>Welcome To My Login!</h3>
        <div>
          <label>User Name</label>{this.state.namerror?<input type = "text" style={{border: "1px solid red"}} name = "username" onChange={(e) => this.onChangeOfValue(e)}/>
          : <input type = "text" name = "username" onChange={(e) => this.onChangeOfValue(e)}/>}
        </div>
        <div>
          <label>Password</label>{this.state.passworderror?<input type = "password" style={{border: "1px solid red"}} name = "password" onChange={(e) => this.onChangeOfValue(e)}/>
          : <input type = "password" name = "password" onChange={(e) => this.onChangeOfValue(e)}/>}
        </div>
        <div>
          <button name="home" onClick={(e)=>this.onClickButton(e)}>Login</button>
        </div>
        <div>
          <button name="about" onClick={(e)=>this.onClickButton(e)}>Create</button>
        </div>
      </div>
    )
  }
}

export default Header;
