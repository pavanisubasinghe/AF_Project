var monogoose=require('../DBSchema/SchemaDS');
var schemads=monogoose.model('DrugStock');

var DrugStockController=function(){
  this.insert = (data) => {
      return new Promise(function (resolve, reject) {
          var drugstock=schemads({
              DrugName:data.DrugName,
              UnitType:data.UnitType,
              DrugCategory:data.DrugCategory,
              Price:data.Price,
              ReOrderLevel:data.ReOrderLevel,
              DrugQuantity:data.DrugQuantity
          })

          drugstock.save().then(function(){
              resolve({status:200,message:"DrugStock is added"});
          }).catch(function(err){
              reject({status:500,message:"Error "+err})
          })
      })
  }

  this.getAll=()=>{
    return new Promise(function(reject,resolve){
      schemads.find().then(function(data){
        resolve({status:200,message:data});
      }).catch(function(err){
        reject({status:404,message:"error:-"+err})
      })
    })
  }

  this.getSet=()=>{
    return new Promise(function(reject,resolve){
      schemads.find({DrugQuantity:{$lt:ReOrderLevel}}).then(function(data){
        resolve({status:200,message:data});
      }).catch(function(err){
        reject({status:404,message:"error:-"+err})
      })
    })
  }

}
module.exports=new DrugStockController();
