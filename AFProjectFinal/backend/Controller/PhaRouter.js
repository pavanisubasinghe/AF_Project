var express=require('express');
var routerPavi=express.Router();
var PhaController=require('./PhaController');

routerPavi.post('/',function(req,res){
    PhaController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

routerPavi.get('/:name',function(req,res){
    PhaController.getOne(req.params.name).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

routerPavi.get('/',function(req,res){
    PhaController.getAll().then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

routerPavi.put('/:name',function(req,res){
    PhaController.update(req.params.name,req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})

module.exports=routerPavi;
