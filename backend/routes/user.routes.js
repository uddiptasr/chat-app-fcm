import express from "express";
import ProtectRoute from "../middleware/protectRoute.js";
import { getFriends,getUsersForSideBar ,getAllUsers,sendFriendRequest,acceptFriendRequest} from "../controllers/user.controllers.js"; 

const router=express.Router();

router.get("/",ProtectRoute,getUsersForSideBar)
router.get("/findAllUsers",ProtectRoute,getAllUsers)
router.get("/getFriends",ProtectRoute,getFriends);
router.post("/sendFriendRequest/:id",ProtectRoute,sendFriendRequest)
router.post("/acceptFriendRequest/:id",ProtectRoute,acceptFriendRequest)
export default router;