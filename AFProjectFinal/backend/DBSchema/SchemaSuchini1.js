var mongoose=require('mongoose');
var SchemaSuchini1=mongoose.Schema;


var prescriptionSchema = new SchemaSuchini1({
    patientName:{
        type:String,
        required:true
    },
    prescriptionDate:{
        type:String,
        required:true
    },
    createdDate:{
        type:String,
        required:true
    },
    presStatus:{
        type:String,
        required:true
    },
    drugs:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true
    }

});

mongoose.model('Prescription',prescriptionSchema);


mongoose.connect('mongodb://127.0.0.1:27017/druginfo',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
})

module.exports=mongoose;