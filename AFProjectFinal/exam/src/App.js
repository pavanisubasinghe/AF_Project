import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from './App';
import UpdatePage from './Components/UpdateDrug';
import SearchPage from './Components/SearchDrug';
import LogPage from './login';
import SearchAllPage from './Components/SearchAllDrugs';
import './App.css';


class App extends Component {


  logout=()=>{
    ReactDOM.render(<LogPage/>,document.getElementById('root'));
  }
  updatedrug=()=>{
    ReactDOM.render(<UpdatePage/>,document.getElementById('root'));
  }
  searchdrug=()=>{
    ReactDOM.render(<SearchPage/>,document.getElementById('root'));
  }
  adddrug=()=>{
    ReactDOM.render(<AppPage/>,document.getElementById('root'));
  }
  getall=()=>{
    ReactDOM.render(<SearchAllPage/>,document.getElementById('root'));
  }



  addNewDrug(drugCategory,drugName,drugType,drugPrice,dangerLevel,reOderLevel,dosage,frequency) {


      var data = {"drugCategory": drugCategory, "drugName": drugName, "drugType": drugType,
      "drugPrice":drugPrice,"dangerLevel":dangerLevel,"reOderLevel":reOderLevel,"dosage":dosage,"frequency":frequency};
      console.log(data);
      fetch('http://localhost:8085/drug/', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'}
      }).then(response => {
          return response.json();
      }).then(data => {
          alert('Drug id Added');
      }).catch(err => {
          alert(err);
      })
  }

  addNewDrugStock(DrugName,UnitType,DrugCategory,Price,ReOrderLevel,DrugQuantity) {


      var data = {"DrugName": DrugName, "UnitType": UnitType, "DrugCategory": DrugCategory,
      "Price":Price,"ReOrderLevel":ReOrderLevel,"DrugQuantity":DrugQuantity};
      console.log(data);
      fetch('http://localhost:8085/drugstock/', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'}
      }).then(response => {
          return response.json();
      }).then(data => {
      //    alert('DrugStock is Added');
      }).catch(err => {
          alert(err);
      })
  }



  render() {
    return (

    <div>
      <form class="btn">
        <button class="button" type="button" onClick={()=>{this.adddrug()}}>Add Drug Information</button>
        <button class="button" type="button" onClick={()=>{this.updatedrug()}}>Update Drug Information</button>
        <button class="button" type="button" onClick={()=>{this.searchdrug()}}>Search Drug Information</button>
        <button class="button" type="button" onClick={()=>{this.logout()}}>Log out</button>
        <button class="button" type="button" onClick={()=>{this.getall()}}>View Drug List</button>

        <h1>Add Drug Information</h1>
      </form>
      <div class="container">

            <p>Drug Category: <input type="text" id="cat"/></p>
            <p>Drug Name: <input type="text" id="name"/></p>
            <p>Drug Type: <input type="text" id="type"/></p>
            <p>Drug Price: <input type="text" id="price"/></p>
            <p>dangerLevel: <input type="text" id="level"/></p>
            <p>ReOrder Level: <input type="text" id="reorder"/></p>
            <p>Dosage: <input type="text" id="dosage"/></p>
            <p>frequency: <input type="text" id="freq"/></p>
            <button type="submit" onClick={()=>{this.addNewDrug(document.getElementById('cat').value,document.getElementById('name').value,document.getElementById('type').value,document.getElementById('price').value,
          document.getElementById('level').value,document.getElementById('reorder').value,document.getElementById('dosage').value,
        document.getElementById('freq').value)}}>Submit</button>
        <button type="submit" onClick={()=>{this.addNewDrugStock(document.getElementById('name').value,document.getElementById('type').value,document.getElementById('cat').value,document.getElementById('price').value,
      document.getElementById('reorder').value,document.getElementById('reorder').value)}}>S</button>


      </div>
        </div>

    );
  }
}

export default App;
