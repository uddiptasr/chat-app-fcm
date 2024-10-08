import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllUsers = () => {
    const [loading,setLoading]=useState(false);
    const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        const getFriends=async()=>{
            try{
                const res=await fetch('/api/user/findAllUsers');
                const data=await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setAllUsers(data);
            }catch(error){  
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }
        getFriends();
    },[])
    return {
        allUsers,
        loading,
    }
}
export default useGetAllUsers;