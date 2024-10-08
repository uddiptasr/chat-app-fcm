import toast from "react-hot-toast";
import useFcmToken from "../zustand/useFcmToken";

const useFcm = () => {

    // const {fcmToken}=useFcmToken();;
    
    const addFcmToken = async(fcmToken) => {
        console.log("in addFcmToken function ::::::",fcmToken);
        if(!fcmToken) return;
        try{
            const res=await fetch("/api/fcmToken/addFcmToken",
                {   method:"POST",
                    headers:{"content-Type":"application/json"},
                    body:JSON.stringify({fcmToken})
                }); 
            const data= await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            console.log("addFcmToken",data);
        } catch (error) {
            toast.error(error.message);
        }
    }
    const removeFcmToken=async()=>{
        try{
            const res=await fetch("/api/fcmToken/removeFcmToken",
                {   method:"POST",
                    headers:{"content-Type":"application/json"},
                    body:JSON.stringify({fcmToken})
                }); 
            const data= await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            console.log("removeFcmToken",data);
        } catch (error) {
            toast.error(error.message);
        }
    }
    return {addFcmToken,removeFcmToken}
}
export default useFcm;