import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://sagarb2003:Sagar1505@cluster0.ak0eh8h.mongodb.net/paytm"
);
const {Schema}=mongoose;

const userSchema= new Schema({
    username:string,
    firstName:string,
    lastName:string,
    password:string,
})

const User= mongoose.model('User',userSchema);

module.exports={
    User
}