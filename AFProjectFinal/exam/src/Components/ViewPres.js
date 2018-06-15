import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppSuchi from '../AppSuchini';
/*import UpdatePage from './UpdateDrug';
import SearchPage from './SearchDrug';
import LogPage from '../login';
import ViewPres from './ViewPres';*/
import propTypes from 'prop-types';

class ViewPres extends Component{

    back=()=>{
        ReactDOM.render(<AppSuchi/>,document.getElementById('root'));
    }
    static get propTypes(){
        pres :propTypes.array;

    }


    constructor(props){
        super(props);

    }

    componentWillReceiveProps(props){
        this.setState(props);
        console.log('will receive called');
    }




    render(){
        this.pres=this.props.allPres;
        return (
            <div>
                <h3>Prescription List</h3>
                <div>
                    <table id="tableDesign">
                        <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Prescription Date</th>
                            <th>Created Date</th>
                            <th>Status</th>
                            <th>Drug Name</th>
                            <th>Quantity</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.pres.map(item=>

                            <tr className="tablerow" key ={item.patientName}>
                                <td className="tabledata">{item.patientName}</td>
                                <td className="tabledata">{item.prescriptionDate}</td>
                                <td className="tabledata">{item.createdDate}</td>
                                <td className="tabledata">{item.presStatus}</td>
                                <td className="tabledata">{item.drugs}</td>
                                <td className="tabledata">{item.qty}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <button class="button" type="button" onClick={() => {this.back()}}>Back</button>
            </div>
        );
    }
}

export default ViewPres;
