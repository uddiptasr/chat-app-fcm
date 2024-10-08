import { useEffect } from "react";
import toast from "react-hot-toast";
import useNotifications from "../zustand/useNotifications";
const useGetAllNotifications = () => {
    const {setAllNotifications,setLoading}=useNotifications();    

    useEffect(()=>{
        console.log("in useGetAllNotifications");
        const getNotifications=async()=>{
            try{
                const res=await fetch('/api/notification/getAllNotifications');
                const data=await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setAllNotifications(data);
            }catch(error){  
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }
        getNotifications();

    },[])
}
export default useGetAllNotifications;