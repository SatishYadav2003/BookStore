import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"


dotenv.config();




const app = express();
const PORT = process.env.PORT || 4001;
const url = process.env.MongoDBURI;

app.use(cors());
app.use(express.json())


try {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connect to mongodb successfully")

}
catch (error) {
    console.log(error);
}




app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {

    console.log(`server is listening at port ${PORT}`)
})