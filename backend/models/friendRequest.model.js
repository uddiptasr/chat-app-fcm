import mongoose from "mongoose";

const friendRequestSchema=new mongoose.Schema({
    senderId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    ,
    receiverId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    ,
    approved:{
        type:Boolean,
        default:false,
    }
    
},{timestamps:true})

const FriendRequest=mongoose.model("FriendRequest",friendRequestSchema);
export default FriendRequest;