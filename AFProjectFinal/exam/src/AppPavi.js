import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from './AppPavi';
import UpdateBatch from './Components/UpdatBatch';
import SearchBatch from './Components/SearchBatch';
import ViewBatch from './Components/SearchAllBatch';
import LogIn from './login';


import './App.css';

class AppPavi extends Component {

    addBatch=()=>{
        ReactDOM.render(<AppPage/>,document.getElementById('root'));
    }

    updateBatch=()=>{
        ReactDOM.render(<UpdateBatch/>,document.getElementById('root'));
    }

    searchBatch=()=>{
        ReactDOM.render(<SearchBatch/>,document.getElementById('root'));
    }

    loadBatch=()=>{
        ReactDOM.render(<ViewBatch/>,document.getElementById('root'));
    }

    loadLogin=()=>{
        ReactDOM.render(<LogIn/>,document.getElementById('root'));
    }


    addNewBatch(category,name,batchNo,Type,Quantity,manDate,expDate) {

        var data = {"category":category,"name": name, "batchNo": batchNo, "Type": Type,"Quantity":Quantity,"manDate":manDate,"expDate":expDate};
        console.log(data);
        fetch('http://localhost:8085/Pha/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('Batch Added');
        }).catch(err => {
            alert(err);
        })
    }

    render() {
        return (

            <div>
                <form className="btn">
                    <button type="button" onClick={()=>{this.addBatch()}}>Add Batch</button>
                    <button type="button" onClick={()=>{this.updateBatch()}}>Update Batch</button>
                    <button type="button" onClick={()=>{this.searchBatch()}}>Search Batch</button>
                    <button type="button" onClick={()=>{this.loadBatch()}}>Load Batch Table</button>
                    <button className="button" type="button" onClick={() => {this.loadLogin()}}>LogOut</button>
                </form>

                <div className="container">
                    <h1>Drug Information</h1>
                    <p>Category: <input type="text" id="category"/></p>
                    <p>Name: <input type="text" id="name"/></p>
                    <p>Batch No: <input type="text" id="batchNO"/></p>
                    <p>Type: <input type="text" id="type"/></p>
                    <p>Quantity: <input type="text" id="quantity"/></p>
                    <p>Manufactured Date: <input type="text" id="manDate"/></p>
                    <p>Expire Date: <input type="text" id="expDate"/></p>
                    <button type="submit" onClick={()=>{this.addNewBatch(document.getElementById('category').value,document.getElementById('name').value,
                        document.getElementById('batchNO').value,document.getElementById('type').value,document.getElementById('quantity').value,
                        document.getElementById('manDate').value,document.getElementById('expDate').value)}}>Submit</button>


                </div>
            </div>

        );
    }
}

export default AppPavi;
