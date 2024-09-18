import express from "express"
import {userFeedback} from "../controller/feedback.controller.js"


const router=express.Router()

router.post("/",userFeedback);

export default router;