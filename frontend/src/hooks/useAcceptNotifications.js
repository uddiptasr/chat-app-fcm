import { useState } from "react";
import toast from "react-hot-toast";

const useAcceptNotifications = () => {
    const [loading,setLoading]=useState(false);

    const acceptRequest=async(friendRequestId)=>{
        setLoading(true);
        try{
            const res=await fetch(`/api/user/acceptFriendRequest/${friendRequestId}`,{
                method:"POST",
                headers:{"content-Type":"application/json"}
            });
            const data=await res.json();
            if(data.error) throw new Error(data.error);
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