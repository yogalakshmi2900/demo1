import React from 'react';
import { Redirect,Link} from "react-router-dom";
class Page extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <div><h1> Login successful </h1></div>
      <div><Link to ="/sample">Previous</Link></div>
      </div>
    );
  }
}
export default Page;
