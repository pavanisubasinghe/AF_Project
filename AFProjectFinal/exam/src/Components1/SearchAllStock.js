import React,{Component} from 'react';
import SearchAllPage from './SearchAllStock';
import StockPage from './ViewStocks';



class SearchAllStock extends Component{
  constructor(props){
    super(props);
    this.state={
      allStocks:[]
    }
    this.getAllStock();
  }

  getAllStock(){
    fetch('http://localhost:8085/drugstock/' , {
        method:'GET',
        headers:{'Content-Type':'application/json'}
    }).then(res=>{
        return res.json();
    }).then(data =>{
        this.setState({allStocks : data})
    }).catch(err=>{
      alert('failed to upload stocks:'+err);
    })
    console.log('getAllMethod called');
  }



  render() {
    return (
      <div>
        <StockPage allStocks={this.state.allStocks} />
      </div>
    );
  }
}

export default SearchAllStock;
