import useFcmToken from "../zustand/useFcmToken";
import {getToken} from 'firebase/messaging'
import {messaging} from '../firebase'
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import useFcm from "./useFcm";


const useNotificationPermission = () => {
    const {setFcmToken} =useFcmToken();
    const {authUser}=useAuthContext();
    const {addFcmToken}=useFcm();
    useEffect(() => {
      const notificationPermission =async()=> {
        const permision=await Notification.requestPermission();
           if(permision=='granted'){
             const token=await getToken(messaging, {
               vapidKey:'BN7tN3b5KvRZLRNBVxUWWU_99kl4jN96V3AQ135Ig_IrKmbX2MVLP9kCrH26D2aRJ6xFHG_ukIHQXhLbjvIOtm0'
             })
             setFcmToken(token);   
             console.log("token",token);
             addFcmToken(token);
           }else if(permision=='denied'){
             console.log('permission denied')
           }
       }
       if(authUser){notificationPermission()}
    },[authUser])
    // const notificationPermission =async()=> {
    //       const permision=await Notification.requestPermission();
    //          if(permision=='granted'){
    //            const token=await getToken(messaging, {
    //              vapidKey:'BN7tN3b5KvRZLRNBVxUWWU_99kl4jN96V3AQ135Ig_IrKmbX2MVLP9kCrH26D2aRJ6xFHG_ukIHQXhLbjvIOtm0'
    //            })
    //            setFcmToken(token);      
    //            console.log("token",token);
    //          }else if(permision=='denied'){
    //            console.log('permission denied')
    //          }
    //      }

    // return {notificationPermission};
}

export default useNotificationPermission;