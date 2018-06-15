import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LogPage from './login';
import RegisterPage from './UserRegister';

class UserRegister extends Component{

  log=()=>{
    ReactDOM.render(<LogPage/>,document.getElementById('root'));
  }
  register=()=>{
    ReactDOM.render(<RegisterPage/>,document.getElementById('root'));
  }


  addNewUser(email,username,password) {


      var data = {"email":email,"username":username,"password":password};
      console.log(data);
      fetch('http://localhost:8085/users/', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'}
      }).then(response => {
          return response.json();
      }).then(data => {
          alert('user is registered');
      }).catch(err => {
          alert(err);
      })
  }


  render(){
    return(
      <div>
      <form class="btn">
        <button class="button" type="button" onClick={()=>{this.log()}}>Login</button>
        <button class="button" type="button" onClick={()=>{this.register()}}>SignUp</button>

      <h1>Register User</h1>
      </form>
      <body class="container">
            <p>Email: <input type="text" id="email"/></p>
            <p>Username: <input type="text" id="uname"/></p>
            <p>Password: <input type="text" id="pwd"/></p>
            <button type="submit" onClick={()=>{this.addNewUser(document.getElementById('email').value,document.getElementById('uname').value,document.getElementById('pwd').value)}}>Submit</button>
      </body>

      </div>

    );
  }


}

export default UserRegister;
