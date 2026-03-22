import 'dotenv/config';
import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'pay-fast-payment-gateway backend api running',
    })
})
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`visit http://localhost:${PORT}`)
})