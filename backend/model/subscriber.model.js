import mongoose, { mongo } from "mongoose";

const subscribeSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    }
})

const subscribeModel=mongoose.model("Subscriber",subscribeSchema);
export default subscribeModel;