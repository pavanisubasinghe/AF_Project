import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../AppPavi';
import UpdateBatch from './UpdatBatch';
import SearchBatch from './SearchBatch';
import ViewBatch from './SearchAllBatch';
import '../App.css';

class UpdatBatch extends Component {

    constructor(props){
        super(props);
        this.state={
            category:null,
            name:null,
            batchNo:null,
            Type:null,
            Quantity:null,
            manDate:null,
            expDate:null
        }

    }

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


    searchBatch=(name)=>{

        fetch('http://localhost:8085/Pha/'+name,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{

            for(var Pha of data){
                var category=Pha.category;
                var name=Pha.name;
                var batchNo=Pha.batchNo;
                var Type=Pha.Type;
                var Qty=Pha.Quantity;
                var manDate=Pha.manDate;
                var expDate=Pha.expDate;
            }

            this.setState({
                category: category,
                name: name,
                batchNo: batchNo,
                Type: Type,
                Quantity: Qty,
                manDate: manDate,
                expDate: expDate
            })

        }).catch(err=>{
            alert(err);
        })

    }

    UpdateBatch=(category,name,batchNo,Type,Qty,manDate,expDate)=>{

        var data={"category":category,"name":name,"batchNo":batchNo,"Type":Type,"Quantity":Qty,"manDate":manDate,"expDate":expDate};

        console.log("Name "+name);
        console.log(data);

        if(category=='',name=='',batchNo=='',Type=='',Qty=='',manDate=='',expDate==''){
            alert('please fill the fields');
        }

        else{
            fetch('http://localhost:8085/Pha/'+data.name,{

                method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();
            }).then(data=>{
                alert('Update Batch');
            }).catch(err=>{
                alert(err);
            })
        }
    }


    render() {
        var category=JSON.stringify(this.state.category);
        var name=JSON.stringify(this.state.name);
        var batchNo=JSON.stringify(this.state.batchNo);
        var Type=JSON.stringify(this.state.Type);
        var Quantity=JSON.stringify(this.state.Quantity);
        var manDate=JSON.stringify(this.state.manDate);
        var expDate=JSON.stringify(this.state.expDate);
        return (

            <div>
                <form className="btn">
                    <button type="button" onClick={()=>{this.addBatch()}}>Add Batch</button>
                    <button type="button" onClick={()=>{this.updateBatch()}}>Update Batch</button>
                    <button type="button" onClick={()=>{this.searchBatch()}}>Search Batch</button>
                    <button type="button" onClick={()=>{this.loadBatch()}}>Load Batch Table</button>
                </form>

                <div className="container">
                    <h1>Update Batch</h1>
                    <p>Enter Batch Name: <input type="text" id="name"/><button type="submit" onClick={()=>{this.searchBatch(document.getElementById('name').value)}}>Search</button></p>

                    <h3>Edit Here</h3>
                    <p>Category: <input type="text" placeholder={category} id='category'/></p>
                    <p>Name: <input type="text" placeholder={name} id='name'/></p>
                    <p>batchNo: <input type="text" placeholder={batchNo} id='batchNo'/></p>
                    <p>Type: <input type="text" placeholder={Type} id='Type'/></p>
                    <p>Quantity: <input type="text" placeholder={Quantity} id='Quantity'/></p>
                    <p>manDate: <input type="text" placeholder={manDate} id='manDate'/></p>
                    <p>expDate: <input type="text" placeholder={expDate} id='expDate'/></p>
                    <button type={"submit"} onClick={()=>{this.UpdateBatch(document.getElementById('category').value,document.getElementById('name').value,
                        document.getElementById('batchNo').value,document.getElementById('Type').value,
                        document.getElementById('Quantity').value,document.getElementById('manDate').value,document.getElementById('expDate').value)}}>Update</button>
                </div>
            </div>


        );
    }
}

export default UpdatBatch;
