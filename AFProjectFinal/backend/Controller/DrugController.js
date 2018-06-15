var monogoose=require('../DBSchema/Schema');
var dschema=monogoose.model('Drug');

var DrugController=function(){
    this.insert = (data) => {
        return new Promise(function (resolve, reject) {
            var drug=dschema({
                drugCategory:data.drugCategory,
                drugName:data.drugName,
                drugType:data.drugType,
                drugPrice:data.drugPrice,
                dangerLevel:data.dangerLevel,
                reOderLevel:data.reOderLevel,
                dosage:data.dosage,
                frequency:data.frequency
            })

            drug.save().then(function(){
                resolve({status:200,message:"Drug is added"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.getOne = (drugCategory) => {
        return new Promise(function (resolve, reject) {

            var Category=new RegExp(["^",drugCategory,"$"].join(""),"i");

            dschema.find({drugCategory:Category}).then(function(data){
                resolve({status:200,message:data});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.getAll=()=>{
      return new Promise(function(reject,resolve){
        dschema.find().then(function(data){
          resolve({status:200,message:data});
        }).catch(function(err){
          reject({status:404,message:"error:-"+err})
        })
      })
    }
    this.update = (drugCategory, data) => {
        return new Promise(function (resolve, reject) {
            dschema.update({drugCategory:drugCategory},data).then(function(){
                resolve({status:200,message:"Drug is Updated"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.dalete=(drugCategory)=>{
      return new promise(function(resolve,reject){
        dschema.delete({drugCategory:drugCategory}).then(function(){
          resolve({status:200,message:"Drug information is deleted"});
        }).catch(function(err){
          reject({status:500,message:"error:-"+err});
        })
      })
    }
}

module.exports=new DrugController();
