import express from "express"
import { subscriberController } from "../controller/subscriber.controller.js"


const router = express.Router();


router.post("/", subscriberController);
export default router;