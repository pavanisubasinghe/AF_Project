import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from './App';
import SearchStockPage from './Components1/SearchAllStock';
import AppSuchini from './AppSuchini';
import AppPavi from './AppPavi';
import img from './img/phr.png';
import img2 from './img/pic.png';
import './App.css';


class Home extends Component{

  drughandle=()=>{
    ReactDOM.render(<AppPage/>,document.getElementById('root'));
  }
  orderhandle=()=>{
    ReactDOM.render(<SearchStockPage/>,document.getElementById('root'));
  }
    preshandle=()=>{
        ReactDOM.render(<AppSuchini/>,document.getElementById('root'));
    }
    batchhandle=()=>{
        ReactDOM.render(<AppPavi/>,document.getElementById('root'));
    }


  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
        <form class="btn">
          <button class="button" type="button" onClick={()=>{this.drughandle()}}>Handling Drugs</button>
         <button class="button" type="button" onClick={()=>{this.orderhandle()}}>Handling Drug Orders</button>
          <button class="button" type="button" onClick={()=>{this.preshandle()}}>Handle Drug Prescription</button>
            <button class="button" type="button" onClick={() => {this.batchhandle()}}>Handle Drug Batch</button>
        </form>
        <div class="container">
          <img src={img} className="App-logo" alt="logo" /><h1>PHARMACY</h1>


        </div>
        </div>



    );
  }
}

export default Home;
