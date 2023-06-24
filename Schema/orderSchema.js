const mongoose=require('mongoose');

const Order=new mongoose.Schema({
    customer_fullname:String,
    customer_phonenumber:Number, //validate the phone number
    customer_email:String, //validate the email
    order_time:Date,
    order_note:String,
    order_items:[{
        item_name:String,
        amount:Number,
        ice_level:String,
        sugar_level:String,
        toppings:Array,
        price:Number
        }],
    order_code:String,
    order_complete:Boolean,
    total_price:Number
})

module.exports=mongoose.model('order',Order);