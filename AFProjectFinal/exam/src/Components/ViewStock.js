import React, { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import AppSuchi from '../AppSuchini';
/*import UpdatePage from './UpdateDrug';
import SearchPage from './SearchDrug';
import LogPage from '../login';*/
import ViewPage from './ViewStock';
import propTypes from 'prop-types';

class ViewStock extends Component{
    back=()=>{
        ReactDOM.render(<AppSuchi/>,document.getElementById('root'));
    }

    static get propTypes(){
        stock :propTypes.array;

    }
    constructor(props){
        super(props);

    }

    componentWillReceiveProps(props){
        this.setState(props);
        console.log('will receive called');
    }




    render(){
        this.stock=this.props.allStock;
        //console.log(this.props.allDrugs);
        return (
            <div>
                <h3>Stock List</h3>
                <table id="tableDesign">
                    <thead>
                    <tr>
                        <th>Drug Name</th>
                        <th>Quantity In Hand</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.stock.map(item=>

                        <tr className="tablerow" key ={item.name}>
                            <td className="tabledata">{item.name}</td>
                            <td className="tabledata">{item.quantity}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <button class="button" type="button" onClick={() => {this.back()}}>Back</button>
            </div>
        );
    }
}

export default ViewStock;
