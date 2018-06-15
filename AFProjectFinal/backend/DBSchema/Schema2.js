var mongoose=require('mongoose');
var uschema=mongoose.Schema;

var UserSchema =new uschema({

  email:{
    type:String,
    required:true
  },
  username: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  }

});
mongoose.model('User',UserSchema);

mongoose.connect('mongodb://127.0.0.1:27017/druginfo',function(err){
    if(err){
        console.log("Err :"+err);
        process.exit(-1);
    }
    console.log("Connected to the DB");
})

module.exports=mongoose;
