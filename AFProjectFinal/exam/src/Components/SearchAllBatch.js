import React, {Component} from 'react';
import ViewBatch from './ViewBatch';
import '../App.css';

class SearchAllBatch extends Component{
    constructor(props){
        super(props);
        this.state={
            allBatch:[]
        };
        this.getAllBatch();
    }

    getAllBatch(){
        fetch('http://localhost:8085/Pha/', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            return res.json();
        }).then(data => {
            this.setState({allBatch:data})
        }).catch(err => {
            alert('failed to search batch'+err);
        });
        console.log('getAllMethod called');
    }

    render(){
        return(
            <div>
                <ViewBatch allBatch={this.state.allBatch}/>
            </div>
        );
    }
}

export default SearchAllBatch;