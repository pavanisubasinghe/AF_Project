var express=require('express');
var router=express.Router();
var DrugController=require('./DrugController');

router.post('/',function(req,res){
    DrugController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router.get('/:drugCategory',function(req,res){
    DrugController.getOne(req.params.drugCategory).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router.get('/',function(req,res){
  DrugController.getAll().then(function(data){
    res.status(data.status).send(data.message);
  }).catch(function(err){
    res.status(err.status).send(err.message);
  })
})

router.put('/:drugCategory',function(req,res){
    DrugController.update(req.params.drugCategory,req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})

router.delete('./:drugCategory',function(req,res){
    DrugController.delete(req.params.drugCategory).then(function(data){
      res.status(data.status).send({message:data.message});
    }).catch(function(err){
      res.status(err.status).send({message:err.message});
    })
})


module.exports=router;
