import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../AppPavi';
import UpdateB from './UpdatBatch';
import SearchB from './SearchBatch';
import ViewBatch from './SearchAllBatch';
import '../App.css';

class SearchBatch extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            author:"",
            price:""
        }

    }

    addBatch=()=>{
        ReactDOM.render(<AppPage/>,document.getElementById('root'));
    }

    updateBatch=()=>{
        ReactDOM.render(<UpdateB/>,document.getElementById('root'));
    }

    searchBatch=()=>{
        ReactDOM.render(<SearchB/>,document.getElementById('root'));
    }

    loadBatch=()=>{
        ReactDOM.render(<ViewBatch/>,document.getElementById('root'));
    }

    searchB=(name)=>{

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
                Qty: Qty,
                manDate: manDate,
                expDate: expDate

            })

        }).catch(err=>{
            alert(err);
        })

    }


    /* buy=(price,qty,name)=>{

         var data={"name":this.state.name,"qty":qty,"price":this.state.price};
         console.log(data);
         fetch('http://localhost:3009/book/',{
             method:'POST',
             body:JSON.stringify(data),
             headers:{'Content-Type':'application/json'}
         }).then(response=>{
             return response;
         }).then(data=>{
             alert('Purchase success');
         }).catch(err=>{
             alert(err);
         })


     }

 */
    render() {
        var category=JSON.stringify(this.state.category);
        var name=JSON.stringify(this.state.name);
        var batchNo=JSON.stringify(this.state.batchNo);
        var Type=JSON.stringify(this.state.Type);
        var Qty=JSON.stringify(this.state.Qty);
        var manDate=JSON.stringify(this.state.manDate);
        var expDate=JSON.stringify(this.state.expDate);
        return (

            <div>
                <form class="btn">
                    <button type="button" onClick={()=>{this.addBatch()}}>Add Batch</button>
                    <button type="button" onClick={()=>{this.updateBatch()}}>Update Batch</button>
                    <button type="button" onClick={()=>{this.searchBatch()}}>Search Batch</button>
                    <button type="button" onClick={()=>{this.loadBatch()}}>Load Batch Table</button>
                </form>

                <div className="container">
                    <h1>Search Batch</h1>
                    <p>Enter Batch Name: <input type="text" id="name"/><button type={"submit"} onClick={()=>{this.searchB(document.getElementById('name').value)}}>Search</button></p>
                    <p>Category: <input type="text" placeholder={category} id='category'/></p>
                    <p>Name: <input type="text" placeholder={name} id='name'/></p>
                    <p>batchNo: <input type="text" placeholder={batchNo} id='batchNo'/></p>
                    <p>Type: <input type="text" placeholder={Type} id='Type'/></p>
                    <p>Quantity: <input type="text" placeholder={Qty} id='Quantity'/></p>
                    <p>manDate: <input type="text" placeholder={manDate} id='manDate'/></p>
                    <p>expDate: <input type="text" placeholder={expDate} id='expDate'/></p>
                </div>
            </div>

        );
    }
}

export default SearchBatch;
