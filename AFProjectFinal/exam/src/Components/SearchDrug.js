import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../App';
import UpdatePage from './UpdateDrug';
import SearchPage from './SearchDrug';
import LogPage from '../login';
import SearchAllPage from './SearchAllDrugs';
import '../App.css';

class SearchDrug extends Component {

    constructor(props){
        super(props);
        this.state={
          drugCategory:'',
          drugName:'',
          drugType:'',
          drugPrice:'',
          dangerLevel:'',
          reOderLevel:'',
          dosage:'',
          frequency:''

    }
  }
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



    searchD=(drugCategory)=>{

        fetch('http://localhost:8085/drug/'+drugCategory,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{

          for(var drug of data){
            var drugCategory=drug.drugCategory;
            var drugName=drug.drugName;
            var drugType=drug.drugType;
            var drugPrice=drug.drugPrice;
            var dangerLevel=drug.dangerLevel;
            var reOderLevel=drug.reOderLevel;
            var dosage=drug.dosage;
            var frequency=drug.frequency;

          }

            this.setState({

               drugCategory:drugCategory,
               drugName:drugName,
               drugPrice:drugPrice,
               drugType:drugType,
               dangerLevel:dangerLevel,
               reOderLevel:reOderLevel,
               dosage:dosage,
               frequency:frequency
            })

        }).catch(err=>{
            alert(err);
        })

    }




    render(){



        var drugCategory=JSON.stringify(this.state.drugCategory);
        var drugName=JSON.stringify(this.state.drugName);
        var drugType=JSON.stringify(this.state.drugType);
        var drugPrice=JSON.stringify(this.state.drugPrice);
        var dangerLevel=JSON.stringify(this.state.dangerLevel);
        var reOderLevel=JSON.stringify(this.state.reOderLevel);
        var dosage=JSON.stringify(this.state.dosage);
        var frequency=JSON.stringify(this.state.frequency);

        return (
        <div>
          <form class="btn">
            <button class="button" type="button" onClick={()=>{this.adddrug()}}>Add Drug Information</button>
            <button class="button" type="button" onClick={()=>{this.updatedrug()}}>Update Drug Information</button>
            <button class="button" type="button" onClick={()=>{this.searchdrug()}}>Search Drug Information</button>
            <button class="button" type="button" onClick={()=>{this.logout()}}>Log out</button>
            <button class="button" type="button" onClick={()=>{this.getall()}}>View Drug List</button>
            <h1>Search Drug Infomation</h1>
          </form>

              <div class="container">
                <p>Choose Drug Category: <input type="text" id="cat"/>
                <button type={"submit"} onClick={()=>{this.searchD(document.getElementById('cat').value)}}>Search</button></p>
                <p>Drug Category: {drugCategory}</p>
                <p>Drug Name: {drugName}</p>
                <p>Drug Type:{drugType} </p>
                <p>Drug Price:{drugPrice} </p>
                <p>Danger Level:{dangerLevel} </p>
                <p>ReOrder Level:{reOderLevel} </p>
                <p>Dosage:{dosage} </p>
                <p>Frequency:{frequency} </p>
              </div>

            </div>
        );
    }
}

export default SearchDrug;
