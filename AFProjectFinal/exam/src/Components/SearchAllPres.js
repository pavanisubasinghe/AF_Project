import React,{Component} from 'react';
import ViewPres from './ViewPres';

class SearchAllPres extends Component{
    constructor(props){
        super(props);
        this.state={
            allPres:[]
        };
        this.getAllPres();
    }

    getAllPres(){
        fetch('http://localhost:8085/prescriptions/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allPres : data})
        }).catch(err=>{
            alert('failed to upload pres:'+err);
        });
        console.log('getAllMethod called');
    }



    render() {
        return (
            <div>
                <ViewPres allPres={this.state.allPres} />
            </div>
        );
    }
}

export default SearchAllPres;
