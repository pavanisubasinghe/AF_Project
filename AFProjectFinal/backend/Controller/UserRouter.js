var express=require('express');
var urouter=express.Router();
var UserController=require('./UserController');

urouter.post('/',function(req,res){
    UserController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

urouter.get('/:username',function(req,res){
    UserController.getOne(req.params.username).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

module.exports=urouter;
