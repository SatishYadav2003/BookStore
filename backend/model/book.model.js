import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
});

const bookModel=mongoose.model('bookHistory',bookSchema);

export default bookModel;