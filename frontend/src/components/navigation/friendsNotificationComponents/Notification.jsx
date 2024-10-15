import useAcceptNotifications from "../../../hooks/useAcceptNotifications";

const Notification = ({notification}) => {

    const {senderId}=notification;
    const {loading,acceptRequest}=useAcceptNotifications(); 
    // let isAccepted=notification.approved;
    const {approved}=notification;


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
              {loading ?(
                  <div className="loading loading-spinner loading-md"></div>
              ):(
              !approved?( 
                <>
              <button 
              className='btn btn-primary bg-blue-600'
              onClick={()=>handleAcceptRequest(notification._id)}
              disabled={loading}
              >
                  Accept
              </button>
              <button  
              className='btn btn-primary bg-red-600'
              onClick={()=>handleCancelRequest}
              disabled={loading}
              >
                  Reject
              </button>
              </>)
            :(
            <p className='font-bold text-gray-200'>Friend Request Accepted</p>)
            )}
            </div>
    </>
    )
}

export default Notification