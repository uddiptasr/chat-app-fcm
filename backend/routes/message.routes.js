import express from "express";
import { sendMessage,getMessages } from "../controllers/message.controller.js";
import ProtectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/:id",ProtectRoute,getMessages);
router.post("/send/:id",ProtectRoute,sendMessage);

export default router;