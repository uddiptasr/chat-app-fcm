import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import notification from "../assets/sounds/notification.mp3"
import useNotifications from "../zustand/useNotifications";
const useListenNotification=()=>{
    const {socket}=useSocketContext();
    const {allNotifications,setAllNotifications}=useNotifications();

    useEffect(()=>{
        socket?.on("newFriendRequest",(FriendRequest)=>{
            console.log("newFriendRequest in client:::::",FriendRequest)
            const sound=new Audio(notification);
            sound.play();
            setAllNotifications([...allNotifications,FriendRequest])
        })
        return ()=>socket?.off("newFriendRequest")
    },[socket,setAllNotifications,allNotifications])
}
export default useListenNotification