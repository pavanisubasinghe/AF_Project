var monogoose=require('../DBSchema/SchemaAC');
var schemaac=monogoose.model('DrugAccepted');

var AcceptedController=function(){
  this.insert = (data) => {
      return new Promise(function (resolve, reject) {
          var drugac=schemaac({
              DrugName:data.DrugName,
              UnitType:data.UnitType,
              DrugCategory:data.DrugCategory,
              Price:data.Price,
              ReOrderLevel:data.ReOrderLevel,
              DrugQuantity:data.DrugQuantity
          })

          drugac.save().then(function(){
              resolve({status:200,message:"AcceptedDrug is added"});
          }).catch(function(err){
              reject({status:500,message:"Error "+err})
          })
      })
  }

  this.getAll=()=>{
    return new Promise(function(reject,resolve){
      schemaac.find().then(function(data){
        resolve({status:200,message:data});
      }).catch(function(err){
        reject({status:404,message:"error:-"+err})
      })
    })
  }
  this.dalete=(DrugName)=>{
    return new promise(function(resolve,reject){
      dschema.delete({DrugName:DrugName}).then(function(){
        resolve({status:200,message:"Drug Stock is deleted"});
      }).catch(function(err){
        reject({status:500,message:"error:-"+err});
      })
    })
  }


}
module.exports=new AcceptedController();
