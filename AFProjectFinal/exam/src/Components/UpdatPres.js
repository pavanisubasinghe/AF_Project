import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddPage from '../AppSuchini';
import UpdatePage from './UpdatPres';
import SearchPage from './SearchPres';
import ViewStock from './SearchAllStock';
import ViewPres from './SearchAllPres';
import '../App.css';

class UpdatPres extends Component {

    constructor(props){
        super(props);
        this.state={
            patientName:null,
            prescriptionDate:null,
            createdDate:null,
            presStatus:null,
            drugs:null,
            qty:null
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

    UpdateP=(patientName,prescriptionDate,createdDate,presStatus,drugs,qty)=>{

        var data={"patientName":patientName,"prescriptionDate":prescriptionDate,"createdDate":createdDate,"presStatus":presStatus,"drugs":drugs,"qty":qty};

        console.log("Patient : "+patientName);
        console.log(data);

        if(patientName==''||prescriptionDate==''||createdDate==''||presStatus==''||drugs==''||qty==''){
            alert('One or more fields empty please fill all the fields');
        }

        else{
            fetch('http://localhost:8085/prescriptions/'+data.patientName,{

                method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();
            }).then(data=>{
                alert('Updated');
            }).catch(err=>{
                alert(err);
            })
        }
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
                    <h1>Update Prescription</h1>
                    <p>Enter Patient Name: <input type="text" id="patientName"/><button type="submit" onClick={()=>{this.SearchP(document.getElementById('patientName').value)}}>Search</button></p>

                    <h3>Edit Here</h3>
                    <p>Patient Name: <input type="text" placeholder={patientName} id='patientName'/></p>
                    <p>Prescription Date: <input type="text" placeholder={prescriptionDate} id='prescriptionDate'/></p>
                    <p>Created Date: <input type="text" placeholder={new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} id='createdDate'/></p>
                    <p>Prescription Status: <input type="text" placeholder={presStatus} id='presStatus'/></p>
                    <p>Drug: <input type="text" placeholder={drugs} id='drugs'/></p>
                    <p>Quantity: <input type="text" placeholder={qty} id='qty'/></p>
                    <button type={"submit"} onClick={()=>{this.UpdateP(document.getElementById('patientName').value,document.getElementById('prescriptionDate').value,document.getElementById('createdDate').value,document.getElementById('presStatus').value,document.getElementById('drugs').value,document.getElementById('qty').value)}}>Update</button>
                </div>
            </div>
        );
    }
}

export default UpdatPres;
