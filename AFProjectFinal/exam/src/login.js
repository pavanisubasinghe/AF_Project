import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from './App';
import './App.css';
import HomePage from './Home';
import RegisterPage from './UserRegister';



class login extends Component{

  log=()=>{
    ReactDOM.render(<AppPage/>,document.getElementById('root'));
  }
  register=()=>{
    ReactDOM.render(<RegisterPage/>,document.getElementById('root'));
  }

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''

}
  }

searchU(){


  if(((document.getElementById('uname').value)=="admin")&&((document.getElementById('pwd').value)=="admin")){
        ReactDOM.render(<HomePage/>,document.getElementById('root'));
 }
}

  render(){
    return <div class="container">
    <form class="btn">
      <button class="button" type="button" onClick={()=>{this.log()}}>Login</button>
      <button class="button" type="button" onClick={()=>{this.register()}}>SignUp</button>

      <p>Username:<input type="text" id="uname" /></p>
      <p>Password:<input type="text" id="pwd" /> </p>
      <button type="submit" onClick={()=>{this.searchU()}}>Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
      </form>



    </div>
  }
}

export default login;
