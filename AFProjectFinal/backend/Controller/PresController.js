var monogoose=require('../DBSchema/SchemaSuchini1');
var schema=monogoose.model('Prescription');


var PresController=function(){
    this.insert = (data) => {
        return new Promise(function (resolve, reject) {
            var p=schema({

                patientName:data.patientName,
                prescriptionDate:data.prescriptionDate,
                createdDate:data.createdDate,
                presStatus:data.presStatus,
                drugs:data.drugs,
                qty:data.qty
            });

            p.save().then(function(){
                resolve({status:200,message:"Added"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    };

    this.getOne = (patientName) => {
        return new Promise(function (resolve, reject) {

            var PatientName=new RegExp(["^",patientName,"$"].join(""),"i");

            schema.find({patientName:PatientName}).then(function(data){
                resolve({status:200,message:data});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.getAll=()=>{
        return new Promise(function(reject,resolve){
            schema.find().then(function(data){
                resolve({status:200,message:data});
            }).catch(function(err){
                reject({status:404,message:"error:-"+err})
            })
        })
    }

    this.update = (patientName, data) => {
        return new Promise(function (resolve, reject) {
            schema.update({patientName:patientName},data).then(function(){
                resolve({status:200,message:"Updated"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.delete=(patientName)=>{
        return new promise(function(resolve,reject){
            schema.delete({patientName:patientName}).then(function(){
                resolve({status:200,message:"Prescription is deleted"});
            }).catch(function(err){
                reject({status:500,message:"error:-"+err});
            })
        })
    }
}

module.exports=new PresController();