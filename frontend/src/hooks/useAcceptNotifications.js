import { useState } from "react";
import toast from "react-hot-toast";
import useNotifications from "../zustand/useNotifications";

const useAcceptNotifications = () => {
    const [loading,setLoading]=useState(false);
    const {allNotifications,setAllNotifications}=useNotifications();

    const acceptRequest=async(friendRequestId)=>{
        setLoading(true);
        try{
            const res=await fetch(`/api/user/acceptFriendRequest/${friendRequestId}`,{
                method:"POST",
                headers:{"content-Type":"application/json"}
            });
            const data=await res.json();
            if(data.error) throw new Error(data.error);

            console.log("allNotifications",allNotifications)
            const updatedNotifications=allNotifications.map(notification=>{
                if(notification._id===friendRequestId){
                    return {...notification,approved:true};
                }
                return notification;
            })
            console.log("friendRequestId",friendRequestId)
            setAllNotifications(updatedNotifications);
            console.log("allNotifications",allNotifications)


            toast.success(data.message);
        }catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {
        loading,
        acceptRequest
    }
}
export default useAcceptNotifications