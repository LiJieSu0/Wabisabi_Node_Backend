const express=require('express');
const router=express.Router();
const menu_item=require('../Schema/menu_itemSchema');

router.get('/',async(req,res)=>{
    try{
        const items=await menu_item.find();
        if(items.length==0) res.status(404).send({Message:"No Result"});
        else{
            res.status(200).send({Menu_items:items});
        }
    }catch(e){
        console.log(e);
    }
});

router.post('/',async(req,res)=>{
    try{
        const newItem=new menu_item(req.body);
        await newItem.save();
        res.status(200).json({new_item:newItem});
        console.log("created");
    }catch(e){
        console.log(e);
    }
});








module.exports=router;
