import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../App.css';
import UpdateBatch from './UpdatBatch';
import SearchBatch from './SearchBatch';
import AppPage from '../AppPavi';
import ReactDOM from "react-dom";

class ViewBatch extends Component{
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
    static get propTypes(){
        batch :propTypes.array;
    }
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props);
        console.log('will receive called');
    }

    render(){
        this.batch = this.props.allBatch;
        return(
            <div>
                <form className="btn">
                    <button type="button" onClick={()=>{this.addBatch()}}>Add Batch</button>
                    <button type="button" onClick={()=>{this.updateBatch()}}>Update Batch</button>
                    <button type="button" onClick={()=>{this.searchBatch()}}>Search Batch</button>
                    <button type="button" onClick={()=>{this.loadBatch()}}>Load Batch Table</button>
                </form>
                <div className="container">
                    <h3>Batch List</h3>
                    <div>
                        <table id="tableDesign">
                            <thead>
                            <tr>
                                <th> Category </th>
                                <th> Name</th>
                                <th> Batch No</th>
                                <th> Type</th>
                                <th> Quantity</th>
                                <th> Man Date</th>
                                <th> Exp Date</th>
                            </tr>
                            </thead>

                            <tbody>
                            {this.batch.map(item =>
                                <tr className="tablerow" key={item.name}>
                                    <td className="tabledata"> {item.category}</td>
                                    <td className="tabledata"> {item.name}</td>
                                    <td className="tabledata"> {item.batchNo}</td>
                                    <td className="tabledata"> {item.Type}</td>
                                    <td className="tabledata"> {item.Quantity}</td>
                                    <td className="tabledata"> {item.manDate}</td>
                                    <td className="tabledata"> {item.expDate}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


export default ViewBatch;