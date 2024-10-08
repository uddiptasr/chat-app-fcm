import FcmToken from "../models/fcmToken.model.js";
import User from "../models/user.model.js";
import admin from "../utils/firebase.js";
export const sendNotification=async(receiverId,title,body)=>{
    const res=await User.findById(receiverId);
    if(!res){
        return res.status(404).json({error:"receiver id not found"});
    }
    const deviceTokenIds=res.fcmTokens;

    
    const deviceTokens=[]
    
    for (const tokenId of deviceTokenIds) {
        try {
            const deviceToken = await FcmToken.findById(tokenId);
            if (deviceToken) {
                if (deviceToken.fcmToken) {
                    deviceTokens.push(deviceToken.fcmToken);
                }
            }
        } catch (error) {
            console.error(`Error retrieving device token for ID ${tokenId}:`, error);
        }
    }
    const message = {
        data: {
            title: title,
            body: body
        },
        tokens: deviceTokens,
    }
    message.tokens=deviceTokens;
    try{
        await admin.messaging().sendEachForMulticast(message);
    }
    catch(error){
        console.error(`Error sending fcm notification :`, error);
    }

    // if(deviceTokens){
    //     for(let token=0;token<deviceTokens.length;token++){
    //         message.token=deviceTokens[token];
    //         try{
    //             const response = await admin.messaging().send(message);
    //         }
    //         catch(error){
    //             console.error(`Error sending fcm notification :`, error);
    //         }
    //     }
    // }
};
