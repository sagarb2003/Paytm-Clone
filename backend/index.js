
const express= require('express');
var cors = require("cors");
const mainRouter=require('./routes/index')

const app=express();
app.use(cors())
app.use(express.json())

app.use('/api/v1',mainRouter)

app.listen(3000)