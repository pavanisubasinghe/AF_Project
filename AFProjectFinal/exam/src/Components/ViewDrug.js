import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../App';
import propTypes from 'prop-types';
import '../App.css';

class ViewDrug extends Component{

  back=()=>{
    ReactDOM.render(<AppPage/>,document.getElementById('root'));
  }
  static get propTypes(){
    drugs :propTypes.array;

  }
  constructor(props){
    super(props);

  }

  componentWillReceiveProps(props){
    this.setState(props)
    console.log('will receive called');
  }




  render(){
    this.drugs=this.props.allDrugs;
    //console.log(this.props.allDrugs);
    return (
      <div>
        <h1 id="list">Drug List</h1>
        <table id="drug">
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>

            </tr>
          </thead>
          <tbody>
            {this.drugs.map(item=>

             <tr className="tablerow" key ={item.drugName}>
                <td className="tabledata">{item.drugCategory}</td>
                <td className="tabledata">{item.drugName}</td>
                <td className="tabledata">{item.drugType}</td>
                <td className="tabledata">{item.drugPrice}</td>
              </tr>
            )}
            </tbody>
          </table>
          <button class="button" type="button" onClick={()=>{this.back()}}>Back</button>
      </div>
    );
  }
}

export default ViewDrug;
