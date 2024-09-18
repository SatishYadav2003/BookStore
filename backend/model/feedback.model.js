import mongoose from "mongoose";

const userFeedback=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const userFeedbackModel=mongoose.model("feedback",userFeedback);
export default userFeedbackModel;