import FriendRequest from "../models/friendRequest.model.js";
import User from "../models/user.model.js";
import { getReceiverSocketId ,io} from '../socket/socket.js';
import { sendNotification} from '../services/notificationService.js';



export const getUsersForSideBar=async(req,res)=>{
    try{
        const loggedInUserId =req.user._id;

        const filteredUsers=await User.find({_id :{$ne : loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    }
    catch(error){
        console.log("Error in getUsersForSideBar: ",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}


///getAllUser ==get all user that are not friends with the current user
//sending friend request..
export const getAllUsers=async(req,res)=>{
    try{
        const loggedInUserId=req.user._id;
 
        const loggedInUserFriends = await User.findById(loggedInUserId).populate("friends","_id");
       
        const friendIds=loggedInUserFriends.friends.map(friend=>friend._id.toString());
        const filterUsers=await User.find(
            {_id :
                {
                $ne : loggedInUserId,
                $nin:friendIds
                }
            }).select("-password");


        res.status(200).json(filterUsers)
    }catch(error){
        console.log("Error in getFriends: ",error.message)
        res.status(500).json({error:"Internal server error"});
   
    }
}

export const getFriends=async(req,res)=>{
    try{
        const loggedInUserId=req.user._id;
        const filteredFriends=await User.findById(loggedInUserId).populate("friends");

        res.status(200).json(filteredFriends);

    }catch(error){
        console.log("Error in getFriends: ",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}


////Accept Friend Request -from frienRequest id  retreiving the  sender and receiver user and add it friend to each and approve in friendRequest table.

export const acceptFriendRequest=async(req,res)=>{   
    try{
        const recieverId=req.user._id;
        const {id : FriendRequestId}=req.params;

        const receiver=await User.findById(recieverId);
        const friendRequest=await FriendRequest.findById(FriendRequestId).populate("senderId receiverId");
        const {senderId:sender}=friendRequest;

        if(sender._id==receiver._id){
            console.log("You can't accept your own request");
            return res.status(400).json({error:"You can't accept your own request"});
        }
        if(!receiver || !friendRequest || !sender){
            console.log("User not found for Friend Request");
            return res.status(404).json({error:"User not found for Friend Request"});
        }
        sender.friends.push(receiver._id);
        receiver.friends.push(sender._id);
        friendRequest.approved=true;
        await sender.save();
        await receiver.save();
        await friendRequest.save();

        res.status(200).json({message:"Friend request sent successfully"});
    }
    catch(error){
        console.log("Error in sendFriendRequest: ",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}


///send friend request which will store in friendRequest table and notify the receiver
export const sendFriendRequest=async(req,res)=>{
    try{
        const senderId=req.user._id;
        const {id :receiverId}=req.params;      //:id from params
        const sender=await User.findById(senderId);
        const receiver=await User.findById(receiverId);

        if(!sender || !receiver){
            console.log("User not found for Friend Request");
            return res.status(404).json({error:"User not found for Friend Request"});
        }

        const newFriendRequest=await FriendRequest.create({
            senderId:sender._id,
            receiverId:receiver._id,
            approved:false,
        });
        await newFriendRequest.save();

        const dbFriendRequest=await FriendRequest.findById(newFriendRequest._id).populate("senderId receiverId");
        //update the notification through rerender
        const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
            console.log("receiverSocketId: ",receiverSocketId);
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newFriendRequest", dbFriendRequest);
		}


        let title=`${sender.fullName} sent you a friend Request`;
        sendNotification(receiverId,title,dbFriendRequest);

        res.status(200).json({message:"Friend request sent successfully"});
    }
    catch(error){
        console.log("Error in sendFriendRequest: ",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}

