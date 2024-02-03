const express=require('express')
const z=require('zod')
const router=express.Router();
const jwt=require('jsonwebtoken')
const {User,Account}=require('../db')
const {JWT_SECRET}=require('../config')
const {authMiddleware} = require('../middleware')



const signUpBody=z.object({
    username:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string().min(5)
})

const signInBody=z.object({
    username:z.string().email(),
    password:z.string()
})

const updateBody=z.object({
    password:z.string().optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional()
})

router.post('/signin',async(req,res)=>{
    const inputCheck=signInBody.safeParse(req.body)
    if(!inputCheck.success){
        res.status(411).json({
            message: "Incorrect Input"
        })
    }
    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password,
    })
    if(user){
        const token=jwt.sign({
            userId:user._id
        },JWT_SECRET)
        res.status(200).json({
            token:token
        })
        return;
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})

router.post('/signup',async(req,res)=>{
    const inputCheck=signUpBody.safeParse(req.body);
    if(!inputCheck.success){
         return res.status(411).json({
            message: "Incorrect Input"
        })
    }
    const existingUser=await User.findOne({
        username:req.body.username,
    })
    if(existingUser){
        return res.status(411).json({
            message: "User already exist"
        })
    }
    const newUser= await User.create({
        username:req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password,
    })
    const userId=newUser._id;
    //Create new account 
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token=jwt.sign({userId},JWT_SECRET)
    return res.status(200).json({
        message: "User created successfully",
        token:token
    })
})

router.put('/',authMiddleware,async(req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    await User.updateOne(
      {
        _id: req.userId,
      },
      req.body
    );
    res.status(200).json({
	    message: "Updated successfully"
    })
})

router.get('/bulk',async(req,res)=>{
    const filter=req.query.filter || ""
    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter,
            },
            lastName:{
                "$regex":filter,
            }
        }]
    })
    res.status(200).json({
        user:users.map(function(user){
            return{
                username: user.username,
                firstName:user.firstName,
                lastName: user.lastName,
                _id :user._id
            }
        })
    })
})

module.exports=router
