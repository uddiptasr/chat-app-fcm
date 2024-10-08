import express from "express";
import ProtectRoute from "../middleware/protectRoute.js";
import { getAllNotifications } from "../controllers/notification.controllers.js";

const router=express.Router();

router.get("/getAllNotifications",ProtectRoute,getAllNotifications);

export default router;