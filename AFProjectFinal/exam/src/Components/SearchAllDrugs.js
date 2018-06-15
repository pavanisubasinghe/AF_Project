import React,{Component} from 'react';
import SearchAllPage from './SearchAllDrugs';
import ViewPage from './ViewDrug';



class SearchAllDrugs extends Component{
  constructor(props){
    super(props);
    this.state={
      allDrugs:[]
    }
    this.getAllDrugs();
  }

  getAllDrugs(){
    fetch('http://localhost:8085/drug/' , {
        method:'GET',
        headers:{'Content-Type':'application/json'}
    }).then(res=>{
        return res.json();
    }).then(data =>{
        this.setState({allDrugs : data})
    }).catch(err=>{
      alert('failed to upload drugs:'+err);
    })
    console.log('getAllMethod called');
  }



  render() {
    return (
      <div>
        <ViewPage allDrugs={this.state.allDrugs} />
      </div>
    );
  }
}

export default SearchAllDrugs;
