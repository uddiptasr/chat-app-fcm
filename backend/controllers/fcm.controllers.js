import User from "../models/user.model.js";
import FcmToken from "../models/fcmToken.model.js";
export const addFcmToken=async(req,res) => {
    const token = req.body.fcmToken;
    if (!token) {
        return res.status(400).json({ message: "FCM token is required." });
    }
    try{
        const userId=req.user._id;
        const user=await User.findById(userId);
        if(!user){
            return  res.status(404).json({ message: "User not found" });
        }
        let fcmTokenCollection=await FcmToken.findOne({fcmToken:token});
        if(!fcmTokenCollection){
            fcmTokenCollection=new FcmToken({fcmToken:token});
            await fcmTokenCollection.save();
        }

        if(!user.fcmTokens.includes(fcmTokenCollection._id)){
            user.fcmTokens.push(fcmTokenCollection._id);
            await user.save();
        }
        return res.status(200).json({message:"token updated successfully"});
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error." });
    }
}

export const removeFcmToken=async(req,res) => { 
    const token = req.body.fcmToken;
    if (!token) {
        return res.status(400).json({ message: "FCM token is required." });
    }
    try{
        const fcmTokenDoc=await FcmToken.findOne({fcmToken:token});
        if(!fcmTokenDoc){
            return  res.status(400).json({ message: "Token is not found" });
        }

        const userId=req.user._id;
        const user=await User.findById(userId);
        if(!user){  
            return  res.status(404).json({ message: "User not found" });
        }
        user.fcmTokens=user.fcmTokens.filter(tokenid=>!tokenid.equals(fcmTokenDoc._id)); 
        await user.save();
        return res.status(200).json({message:"token removed successfully"});

    }catch(error){
        return res.status(500).json({ message: "Internal server error." });
    }
}