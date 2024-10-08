import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
  const {authUser}=useAuthContext();
  const [loading,setLoading]=useState(false);
  const [conversations,setConversations]=useState([]);
  useEffect(()=>{
    const getConversations=async()=>{
        setLoading(true);
        try{
            const res=await fetch('/api/user/getFriends');
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setConversations(data.friends);
        }catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    if(authUser){
        getConversations();
    }
  },[authUser]);
  return {loading,conversations}
}

export default useGetConversations