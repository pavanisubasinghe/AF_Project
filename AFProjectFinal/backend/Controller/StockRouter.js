var express=require('express');
var router2=express.Router();
var StockController=require('./StockController');


router2.post('/',function(req,res){
    StockController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router2.get('/:name',function(req,res){
    StockController.getOne(req.params.name).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router2.get('/',function(req,res){
    StockController.getAll().then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router2.put('/:name',function(req,res){
    StockController.update(req.params.name,req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})

router2.delete('./:name',function(req,res){
    StockController.delete(req.params.name).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})

module.exports=router2;