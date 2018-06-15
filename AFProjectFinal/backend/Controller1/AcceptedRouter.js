var express=require('express');
var routerac=express.Router();
var AcceptedController=require('./AcceptedController');


routerac.post('/',function(req,res){
    AcceptedController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

routerac.get('/',function(req,res){
  AcceptedController.getAll().then(function(data){
    res.status(data.status).send(data.message);
  }).catch(function(err){
    res.status(err.status).send(err.message);
  })
})

routerac.delete('./:DrugName',function(req,res){
    AcceptedController.delete(req.params.DrugName).then(function(data){
      res.status(data.status).send({message:data.message});
    }).catch(function(err){
      res.status(err.status).send({message:err.message});
    })
})

module.exports=routerac;
