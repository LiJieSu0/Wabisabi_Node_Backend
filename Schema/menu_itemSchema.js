const mongoose=require("mongoose");

    const Menu_item=new mongoose.Schema({
        item_name:String,
        price:Number,
        ingredients:[String],
        in_stock:Boolean,
        on_menu:Boolean
    })



module.exports=mongoose.model('menu_item',Menu_item);