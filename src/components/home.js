import React from 'react';
import axios from 'axios';
import {Redirect, Link} from "react-router-dom";
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((data)=>{
      console.log('===',data);
      this.setState({data:data});
    })
  }
  render(){
    var arr = [];
    arr = this.state.data;
    console.log('==ren==',this.state.data);
    
    return(
      <div>
      <h2>This is home</h2>
      <table>
        <tr>
        <th> Country</th>
        <th> Alphacode</th>
        <th> Capital</th>
        </tr>
        <tr>
        <td> </td>
        <td> 001 </td>
        <td> Delhi </td>
        </tr>
      </table>
      </div>
    )
  }
}
export default Home;
