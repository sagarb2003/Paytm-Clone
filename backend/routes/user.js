const express=require('express')
const app=express();
const router=express.Router();

router.get('/signin',async(req,res)=>{
    const input=req.body;
    const inputCheck=User.safeParse(input)
    if(!inputCheck.success){
        res.json({
            msg:'wrong Input '
        })
    }
    else{
        await input.findOne(userDetails)
    }
})

router.post('/signup',(req,res)=>{

})

router.get('/update',(req,res)=>{

})

module.exports=router
