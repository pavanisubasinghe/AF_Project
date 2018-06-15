var mongoose=require('mongoose');
var dschema=mongoose.Schema;

var DrugScehema=new dschema({

    drugCategory:{
        type:String,
        required:true
    },
    drugName:{
        type:String,
        required:true
    },
    drugType:{
        type:String,
        required:true
    },
    drugPrice:{
        type:Number,
        required:true
    },
    dangerLevel:{
        type:Number,
        required:true
    },
    reOderLevel:{
        type:Number,
        required:true
    },
    dosage:{
        type:String,
        required:true
    },
    frequency:{
        type:String,
        required:true
    }

});




mongoose.model('Drug',DrugScehema);


mongoose.connect('mongodb://127.0.0.1:27017/druginfo',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
})

module.exports=mongoose;
