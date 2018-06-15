import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../App';
import UpdatePage from './UpdateDrug';
import SearchPage from './SearchDrug';
import LogPage from '../login';
import SearchAllPage from './SearchAllDrugs';
import '../App.css';

class UpdateDrug extends Component {

    constructor(props){
        super(props);
        this.state={

            drugCategory:null,
            drugName:null,
            drugType:null,
            drugPrice:null,
            dangerLevel:null,
            reOderLevel:null,
            dosage:null,
            frequency:null

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
              drugType:drugType,
              drugPrice:drugPrice,
              dangerLevel:dangerLevel,
              reOderLevel:reOderLevel,
              dosage:dosage,
              frequency:frequency

            })

        }).catch(err=>{
            alert(err);
        })

    }

    UpdateD=(drugCategory,drugName,drugType,drugPrice,dangerLevel,reOderLevel,dosage,frequency)=>{

        var data={"drugCategory":drugCategory,"drugName":drugName,"drugType":drugType,"drugPrice":drugPrice,"dangerLevel":dangerLevel,"reOderLevel":reOderLevel,"dosage":dosage,"frequency":frequency};

        console.log("Category "+drugCategory);
        console.log(data);

        if(drugCategory==''||drugName==''||drugType==''||drugPrice==''||dangerLevel==''||reOderLevel==''){
            alert('One or more fields empty please fill all the fields');
        }

        else{
            fetch('http://localhost:8085/drug/'+data.drugCategory,{

                method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();
            }).then(data=>{
                alert('Drug is Updated');
            }).catch(err=>{
                alert(err);
            })
        }
    }


    render() {
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
            <h1>Update Drug Information</h1>
          </form>

                <div class="container">
                <p>Choose Drug Category: <input type="text" id="cat"/><button type="submit" onClick={()=>{this.searchD(document.getElementById('cat').value)}}>Search</button></p>

                <h3>Edit Here</h3>
                <p>Drug Category: <input type="text" placeholder={drugCategory} id='cat'/></p>
                <p>Drug Name: <input type="text" placeholder={drugName} id='name'/></p>
                <p>Drug Type: <input type="text" placeholder={drugType} id='type'/></p>
                <p>Drug Price: <input type="text" placeholder={drugPrice} id='price'/></p>
                <p>Danger Level: <input type="text" placeholder={dangerLevel} id='dlevel'/></p>
                <p>ReOrder Level: <input type="text" placeholder={reOderLevel} id='rlevel'/></p>

                <button type={"submit"} onClick={()=>{this.UpdateD(document.getElementById('cat').value,document.getElementById('name').value,
                  document.getElementById('type').value,document.getElementById('price').value,
                  document.getElementById('dlevel').value,document.getElementById('rlevel').value)}}>Update</button>
                </div>
            </div>

        );
    }
}

export default UpdateDrug;
