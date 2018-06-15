const express=require('express');
var routes=express.Router();

var Drugrouter=require('./Controller/DrugRouter');
var Userrouter=require('./Controller/UserRouter');
var DrugStockrouter=require('./Controller1/DrugStockRouter');
var Acceptedrouter=require('./Controller1/AcceptedRouter');
var PresRouter=require('./Controller/PresRouter');
var StockRouter=require('./Controller/StockRouter');
var PhaRouter=require('./Controller/PhaRouter');


routes.use('/drug',Drugrouter);
routes.use('/users',Userrouter);
routes.use('/drugstock',DrugStockrouter);
routes.use('/acceptedstock',Acceptedrouter);
routes.use('/prescriptions',PresRouter);
routes.use('/stock',StockRouter);
routes.use('/Pha',PhaRouter);


module.exports=routes;
