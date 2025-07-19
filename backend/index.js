
const express= require('express');
var cors = require("cors");
const mainRouter=require('./routes/index')

const app=express();
app.use(cors())
app.use(express.json())

app.use('/api/v1',mainRouter)

app.get('/',(req,res)=>{
    res.send('Backend is running on PORT 8000!')
})

app.listen(8000,()=>{
    console.log('Backend is running on PORT 8000!')
})
