import { useEffect, useState } from "react";
import useAcceptNotifications from "../../../hooks/useAcceptNotifications";

const Notification = ({notification}) => {

    const {senderId}=notification;
    const isAccepted=notification.approved;
    const {loading,acceptRequest}=useAcceptNotifications(); 
    

    const handleAcceptRequest=async(receiverId)=>{
      await acceptRequest(receiverId);
    }
      const handleCancelRequest=()=>{
      // setfriendRequest("");
    }
   
  
    return (
      <>
       <div className="flex  items-center bg-sky-900 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer justify-between">
            <div className='flex flex-grow'>
                <p className='font-bold text-gray-200'>{senderId.fullName} sent you a friend request</p>      
            </div>

              {!isAccepted?( 
                <>
              <button 
              className='btn btn-primary bg-blue-600'
              onClick={()=>handleAcceptRequest(notification._id)}
              >
                  Accept
              </button>
              <button  
              className='btn btn-primary bg-red-600'
              onClick={()=>handleCancelRequest}
              >
                  Reject
              </button>
              </>)
            :(
            <p className='font-bold text-gray-200'>Friend Request Accepted</p>)
            }
            </div>
    </>
    )
}

export default Notification