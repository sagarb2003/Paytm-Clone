import { express } from "express";
import { User } from "../type";
const express = require("express");
const app=express();
const userRouter=require('./user')
const router=express.Router();
router.use('/user',userRouter)




module.exports=router;

