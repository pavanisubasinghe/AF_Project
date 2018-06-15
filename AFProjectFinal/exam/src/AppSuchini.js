import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddPage from './AppSuchini';
import UpdateP from './Components/UpdatPres';
import SearchPage from './Components/SearchPres';
import ViewStock from './Components/SearchAllStock';
import ViewPres from './Components/SearchAllPres';
import LogPage from './login';


class AppSuchini extends Component {

    addPres=()=>{
        ReactDOM.render(<AddPage/>,document.getElementById('root'));
    }

    updatePres=()=>{
        ReactDOM.render(<UpdateP/>,document.getElementById('root'));
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
    logpage=()=>{
        ReactDOM.render(<LogPage/>,document.getElementById('root'));
    }


    addNewPres(patientName,prescriptionDate,createdDate,presStatus,drugs,qty) {

        var data = {"patientName": patientName, "prescriptionDate": prescriptionDate, "createdDate": createdDate, "presStatus": presStatus, "drugs": drugs, "qty": qty};
        console.log(data);
        fetch('http://localhost:8085/prescriptions/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('Prescription Added');
        }).catch(err => {
            alert(err);
        })
    }



    render() {
        return (


            //patientName prescriptionDate createdDate presStatus drugs
            <div>
                <form class="btn">
                    <button class="button" type="button" onClick={()=>{this.addPres()}}>Add Prescription</button>
                    <button class="button" type="button" onClick={()=>{this.updatePres()}}>Update Prescription</button>
                    <button class="button" type="button" onClick={()=>{this.searchPres()}}>Search Prescription</button>
                    <button class="button" type="button" onClick={()=>{this.loadStock()}}>View Stock</button>
                    <button class="button" type="button" onClick={()=>{this.loadPres()}}>View Prescriptions</button>
                    <button class="button" type="button" onClick={()=>{this.logpage()}}>LogOut</button>
                </form>

                <div class="container">
                    <h1>Add Prescription</h1>
                    <p>Patient Name: <input type="text" id="patientName"/></p>
                    <p>Prescription Date: <input type="text" id="prescriptionDate"/></p>
                    <p>Created Date: <input type="text" id="createdDate" defaultValue={new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}/></p>

                    <p>Prescription Status: <select id="presStatus" >
                        <option value="D">D</option>
                        <option value ="ND">ND</option>
                    </select></p>
                    <p>Drug: <input type="text" id="drugs"/></p>
                    <p>Quantity: <input type="text" id="qty" min="1"/></p>

                    <button type="submit" onClick={()=>{this.addNewPres(document.getElementById('patientName').value,document.getElementById('prescriptionDate').value,document.getElementById('createdDate').value,document.getElementById('presStatus').value,document.getElementById('drugs').value,document.getElementById('qty').value)}}>Submit</button>
                </div>
            </div>
        );
    }
}

export default AppSuchini;
