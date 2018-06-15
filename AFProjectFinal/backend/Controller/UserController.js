var monogoose=require('../DBSchema/Schema2');
var uschema=monogoose.model('User');

var UserController=function(){

  this.insert = (data) => {
      return new Promise(function (resolve, reject) {
          var user=uschema({
              email:data.email,
              username:data.username,
              password:data.password
          })

          user.save().then(function(){
              resolve({status:200,message:"User is signup"});
          }).catch(function(err){
              reject({status:500,message:"Error "+err})
          })
      })
  }

  this.getOne = (username) => {
      return new Promise(function (resolve, reject) {

          var Username=new RegExp(["^",username,"$"].join(""),"i");

          uschema.find({username:Username}).then(function(data){
              resolve({status:200,message:data});
          }).catch(function(err){
              reject({status:500,message:"Error "+err})
          })
      })

}

}
module.exports=new UserController();
