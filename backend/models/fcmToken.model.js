import mongoose from "mongoose";
 
const fcmTokenSchema=new mongoose.Schema({
    fcmToken:{
        type:String,
        required:true

    },
},{timestamps:true});

const FcmToken=mongoose.model("FcmToken",fcmTokenSchema);
export default FcmToken;