var mongoose=require('../DBSchema/SchemaPavi');
var schema=mongoose.model('p');


var PhaController=function(){
    this.insert = (data) => {
        return new Promise(function (resolve, reject) {
            var Pha=schema({
                category:data.category,
                name:data.name,
                batchNo:data.batchNo,
                Type:data.Type,
                Quantity:data.Quantity,
                manDate:data.manDate,
                expDate:data.expDate
            })

            Pha.save().then(function(){
                resolve({status:200,message:"Drug added"});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }

    this.getOne = (name) => {
        return new Promise(function (resolve, reject) {

            var Name=new RegExp(["^",name,"$"].join(""),"i");

            schema.find({name:Name}).then(function(data){
                resolve({status:200,message:data});
            }).catch(function(err){
                reject({status:500,message:"Error "+err})
            })
        })
    }
    this.update = (name, data) => {
        return new Promise(function (resolve, reject) {
            schema.update({name: name}, data).then(function () {
                resolve({status: 200, message: "Updated Drug"});
            }).catch(function (err) {
                reject({status: 500, message: "Error " + err})
            })

        })
    }



    this.getAll=()=>{
        return new Promise(function (resolve, reject) {
            schema.find().then(function (data) {
                resolve({status:200,message:data});
            }).catch(function (err) {
                reject({status:404,message:"error:"+err})
            })

        })
    }

}

module.exports=new PhaController();