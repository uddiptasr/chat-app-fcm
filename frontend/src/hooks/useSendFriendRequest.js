import { useState } from "react";
import toast from "react-hot-toast";


const useSendFriendRequest = () => {
    const [loading,setLoading]=useState(false);
    const sendFriendRequest = async (receiverId) => {
        setLoading(true);
        const res=await fetch(`api/user/sendFriendRequest/${receiverId}`,{
            method:"POST",
            headers:{"content-Type":"application/json"}
        });;
        const data=await res.json();
        if(data.error) throw new Error(data.error);
        setLoading(false);
        toast.success(data.message);
        
    }
    return {
        loading,
        sendFriendRequest
    }
}
export default useSendFriendRequest;