import express from "express";
import ProtectRoute from "../middleware/protectRoute.js";
import {addFcmToken,removeFcmToken} from "../controllers/fcm.controllers.js";

const router=express.Router();

router.post("/addFcmToken",ProtectRoute,addFcmToken);
router.post("/removeFcmToken",ProtectRoute,removeFcmToken);
export default router;