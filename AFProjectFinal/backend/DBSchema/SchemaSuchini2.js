var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var StockSchema=new Schema({

    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }

});

mongoose.model('Stock',StockSchema);



mongoose.connect('mongodb://127.0.0.1:27017/druginfo',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
})

module.exports=mongoose;