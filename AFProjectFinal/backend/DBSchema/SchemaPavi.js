var mongoose=require('mongoose');
var schemaPavi=mongoose.Schema;

var PhaScehema = new schemaPavi({

    category:{
        type:String

    },
    name:{
        type:String

    },
    batchNo:{
        type:String

    },
    Type:{
        type:String

    },
    Quantity:{
        type:Number

    },
    manDate:{
        type:String

    },
    expDate:{
        type:String

    }

})


mongoose.connect('mongodb://127.0.0.1:27017/druginfo',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
})

mongoose.model('p',PhaScehema);


module.exports=mongoose;