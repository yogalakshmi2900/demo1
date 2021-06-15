import React from 'react';
import { Redirect,Link} from "react-router-dom";
class Sample extends React.Component{
  constructor(props){
    super(props);
    this.state={
      first :'',
      last :'',
      no : '',
      redirect:false
    }
    this.validate=this.validate.bind(this);
  }
  validate(){
    if(this.state.first ==''){
      alert('1');
    }
    if(this.state.last ==''){
      alert('0');
    }
    if(this.state.no ==''){
      alert('2');
    }
    else{
      var x = this.state.no;
      var y = x.length;
      if(y!=10){
        alert('Please enter a valid Phone Number')
      }
    }
    if(this.state.first != '' && this.state.last != '' && (this.state.no).length == 10){
      this.setState({redirect:true});

     }
  }
  onChangeValue(event){
    var value = event.target.value;
    var name = event.target.name;
    if(name == "first"){
      this.setState({first:value});
    }
    if(name == "last"){
      this.setState({last:value});
    }
    if(name == "no"){
      this.setState({no:value});
    }
  }
  render(){
    if(this.state.redirect){
      return (<Redirect push to='/page'/>);
    }
    return(
      <div>
      <h1>{this.props.test}</h1>
      <label>First Name</label>  <input type="text" name="first" value={this.state.first}  onChange={(e)=>this.onChangeValue(e)}/>
      <label>Last Name</label>  <input type="text" name="last" value ={this.state.last} onChange={(e)=>this.onChangeValue(e)}/>
      <label>Phone Number</label>  <input type="number" name = "no" value={this.state.no} onChange={(e)=>this.onChangeValue(e)}/>
      <input type="button" value = "submit" onClick={this.validate}/>
      <div><Link to ="/page">Next</Link></div>
      </div>
    )
  }
}

export default Sample;
