import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../Home';
import propTypes from 'prop-types';
import '../App.css';

class ViewStocks extends Component{

  back=()=>{
    ReactDOM.render(<HomePage/>,document.getElementById('root'));
  }
  static get propTypes(){
    stocks :propTypes.array;

  }
  constructor(props){
    super(props);

  }

  componentWillReceiveProps(props){
    this.setState(props)
    console.log('will receive called');
  }




  render(){
    this.stocks=this.props.allStocks;
    //console.log(this.props.allDrugs);
    return (
      <div>
        <h1 id="list">Stock List</h1>
        <table id="drug">
          <thead>
            <tr>
              <th>Drug Name</th>
              <th>Unit Type</th>
              <th>Drug Category</th>
              <th>Price</th>
              <th>Re Order Level</th>
              <th>Drug Quantity</th>


            </tr>
          </thead>
          <tbody>
            {this.stocks.map(item=>

             <tr className="tablerow" key ={item.DrugName}>
                <td className="tabledata">{item.DrugName}</td>
                <td className="tabledata">{item.UnitType}</td>
                <td className="tabledata">{item.DrugCategory}</td>
                <td className="tabledata">{item.Price}</td>
                <td className="tabledata">{item.ReOrderLevel}</td>
                <td className="tabledata">{item.DrugQuantity}</td>
                
              </tr>
            )}
            </tbody>
          </table>
          <button class="button" type="button" onClick={()=>{this.back()}}>Back</button>
      </div>
    );
  }
}

export default ViewStocks;
