var mongoose = require('../DBSchema/SchemaSuchini2');
var schema=mongoose.model('Stock');

var StockController = function () {

    this.insert = (data) => {
        return new Promise(function (resolve, reject) {
            var stock=schema({

                name:data.name,
                quantity:data.quantity
            });

            stock.save().then(function(){
                resolve({status:200,message:"Added"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    };

    this.getAll = () => {
        return new Promise(function (resolve, reject) {

            schema.find().then(function(data){
                resolve({status:200,message:data});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.getOne = (name) => {
        return new Promise(function (resolve, reject) {

            var name=new RegExp(["^",name,"$"].join(""),"i");

            schema.find({name:name}).then(function(data){
                resolve({status:200,message:data});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.update = (name, data) => {
        return new Promise(function (resolve, reject) {
            schema.update({name:name},data).then(function(){
                resolve({status:200,message:"Updated"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.delete=(name)=>{
        return new promise(function(resolve,reject){
            schema.delete({name:name}).then(function(){
                resolve({status:200,message:"Deleted"});
            }).catch(function(err){
                reject({status:500,message:"error:-"+err});
            })
        })
    }

};

module.exports=new StockController();