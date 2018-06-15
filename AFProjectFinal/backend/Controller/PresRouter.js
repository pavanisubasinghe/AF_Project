var express=require('express');
var router1=express.Router();
var PresController=require('./PresController');

router1.post('/',function(req,res){
    PresController.insert(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router1.get('/:patientName',function(req,res){
    PresController.getOne(req.params.patientName).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router1.get('/',function(req,res){
    PresController.getAll().then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    })
})

router1.put('/:patientName',function(req,res){
    PresController.update(req.params.patientName,req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})

router1.delete('./:patientName',function(req,res){
    PresController.delete(req.params.patientName).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})


module.exports=router1;
