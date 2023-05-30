const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log('DB connected');
    }catch(e){
        console.log(e);
    }
}

connectDB();
const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

module.exports=db;