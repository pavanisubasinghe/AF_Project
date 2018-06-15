import React,{Component} from 'react';
import SearchAllPage from './SearchAllStock';
import ViewStock from './ViewStock';


class SearchAllStock extends Component{
    constructor(props){
        super(props);
        this.state={
            allStock:[]
        }
        this.getAllStock();
    }

    getAllStock(){
        fetch('http://localhost:8085/stock/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allStock : data})
        }).catch(err=>{
            alert('failed to upload stocks:'+err);
        })
        console.log('getAllMethod called');
    }



    render() {
        return (
            <div>
                <ViewStock allStock={this.state.allStock} />
            </div>
        );
    }
}

export default SearchAllStock;
