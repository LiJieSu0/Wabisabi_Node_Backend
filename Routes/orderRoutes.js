const express=require('express');
const Order=require('../Schema/orderSchema');
const router=express.Router();

router.get('/', async(req,res)=>{
    try{
        const orders=await Order.find();
        res.status(200).json({Order:orders});
    }catch(e){
        console.log(e);
    }
});

router.post('/',async(req,res)=>{
    try{
        const newOrder=new Order(req.body);
        await newOrder.save();
        res.status(200).json({Order:newOrder});
        console.log("order created");
    }catch(e){
        console.log(e);
    }
})

router.get('/time',async(req,res)=>{
    try{
        const orders=await Order.find();
        const timeArr=orders.map(order=>{
            return order.order_time;
        })
        res.status(200).send({time:timeArr});
        console.log(timeArr);
        console.log(timeArr[1].toLocaleString());
    }catch(e){
        console.log(e);
    }
});

router.post('/submit',async(req,res)=>{
    try{
        const newOrder=new Order(req.body);
        await newOrder.save();
        res.status(200).json({Order:newOrder});
        console.log("order created");
    }catch(e){
        console.log(e);
    }
});

module.exports=router;