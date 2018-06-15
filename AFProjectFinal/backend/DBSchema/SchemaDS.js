var mongoose=require('mongoose');
var schemads=mongoose.Schema;

var DrugStockSchema=new schemads({
  DrugName:{
    type:String,
    required:true
  },
  UnitType:{
    type:String,
    required:true
  },
  DrugCategory:{
    type:String,
    required:true
  },
  Price:{
    type:Number,
    required:true
  },
  ReOrderLevel:{
    type:Number,
    required:true
  },
  DrugQuantity:{
    type:Number,
    required:true
  }

});

mongoose.model('DrugStock',DrugStockSchema);


mongoose.connect('mongodb://127.0.0.1:27017/druginfo',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
})

module.exports=mongoose;
