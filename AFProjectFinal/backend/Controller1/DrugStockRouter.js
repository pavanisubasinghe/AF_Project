var express=require('express');
var routerds=express.Router();
var DrugStockController=require('./DrugStockController');

routerds.post('/',function(req,res){
    DrugStockController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

routerds.get('/',function(req,res){
  DrugStockController.getAll().then(function(data){
    res.status(data.status).send(data.message);
  }).catch(function(err){
    res.status(err.status).send(err.message);
  })
})

routerds.get('/',function(req,res){
  DrugStockController.getSet().then(function(data){
    res.status(data.status).send(data.message);
  }).catch(function(err){
    res.status(err.status).send(err.message);
  })
})




module.exports=routerds;
