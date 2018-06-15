import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddPage from '../AppSuchini';
import UpdatePage from './UpdatPres';
import SearchPage from './SearchPres';
import ViewStock from './SearchAllStock';
import ViewPres from './SearchAllPres';
import '../App.css';

class SearchPres extends Component {

    constructor(props){
        super(props);
        this.state={
            patientName:'',
            prescriptionDate:'',
            createdDate:'',
            presStatus:'',
            drugs:'',
            qty:''
        }

    }

    addPres=()=>{
        ReactDOM.render(<AddPage/>,document.getElementById('root'));
    }

    updatePres=()=>{
        ReactDOM.render(<UpdatePage/>,document.getElementById('root'));
    }

    searchPres=()=>{
        ReactDOM.render(<SearchPage/>,document.getElementById('root'));
    }

    loadStock=()=>{
        ReactDOM.render(<ViewStock/>,document.getElementById('root'));
    }

    loadPres=()=>{
        ReactDOM.render(<ViewPres/>,document.getElementById('root'));
    }

    SearchP=(patientName)=>{

        fetch('http://localhost:8085/prescriptions/'+patientName,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{

            for(var prescription of data){
                var patientName=prescription.patientName;
                var prescriptionDate=prescription.prescriptionDate;
                var createdDate=prescription.createdDate;
                var presStatus=prescription.presStatus;
                var drugs=prescription.drugs;
                var qty=prescription.qty;
            }

            this.setState({
                patientName: patientName,
                prescriptionDate: prescriptionDate,
                createdDate:createdDate,
                presStatus:presStatus,
                drugs:drugs,
                qty:qty
            })

        }).catch(err=>{
            alert(err);
        })

    }

    render() {
        var patientName=JSON.stringify(this.state.patientName);
        var prescriptionDate=JSON.stringify(this.state.prescriptionDate);
        var createdDate=JSON.stringify(this.state.createdDate);
        var presStatus=JSON.stringify(this.state.presStatus);
        var drugs=JSON.stringify(this.state.drugs);
        var qty=JSON.stringify(this.state.qty);
        return (

            <div>
                <form class="btn">
                    <button class="button" type="button" onClick={()=>{this.addPres()}}>Add Prescription</button>
                    <button class="button" type="button" onClick={()=>{this.updatePres()}}>Update Prescription</button>
                    <button class="button" type="button" onClick={()=>{this.searchPres()}}>Search Prescription</button>
                    <button class="button" type="button" onClick={()=>{this.loadStock()}}>View Stock</button>
                    <button class="button" type="button" onClick={()=>{this.loadPres()}}>View Prescriptions</button>
                </form>


                <div class="container">
                    <h1>Search Prescription</h1>
                    <p>Enter Patient Name: <input type="text" id="patientName"/>
                        <button type={"submit"} onClick={()=>{this.SearchP(document.getElementById('patientName').value)}}>Search</button></p>
                    <p>Patient Name: {patientName}</p>
                    <p>Prescription Date: {prescriptionDate}</p>
                    <p>Created Date:{createdDate} </p>
                    <p>Prescription Status: {presStatus}</p>
                    <p>Drug:{drugs} </p>
                    <p>Quantity:{qty} </p>
                </div>
            </div>
        );
    }
}

export default SearchPres;
