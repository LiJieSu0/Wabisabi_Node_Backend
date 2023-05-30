const express=require('express');
const menuRouter=require('./Routes/menuRoutes');
const orderRouter=require('./Routes/orderRoutes');
const db=require('./dbConnection');
const cors=require('cors');
require('dotenv').config();

const frontendAddress=process.env.FRONT_END_ADDRESS;

const app=express();
app.use(cors({
    origin: frontendAddress,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port= 3000;
app.listen(port,()=>{
    console.log("Server is listening on port "+port);
})

app.use('/menu',menuRouter);
app.use('/order',orderRouter);


