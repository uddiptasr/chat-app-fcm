import {  useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import useSendFriendRequest from "../../hooks/useSendFriendRequest";

const Friend = ({friend}) => {
  const {loading,sendFriendRequest}=useSendFriendRequest();
  const [friendRequest,setfriendRequest]=useState(false);


  const handleAddFriend=async(receiverId)=>{
    await sendFriendRequest(receiverId);
    setfriendRequest(true);
  }


  return (
    <>
     <div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer}
			`}
			>
        <div className={`avatar`}>
            <div className='w-12 rounded-full'>
                <img src={friend.profilePic} alt='user avatar'/>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{friend.fullName}</p>            
            {!friendRequest?
            <button 
            className='btn btn-primary btn-circle w-12'
            onClick={()=>handleAddFriend(friend._id)}
            >
                <IoPersonAdd className="text-white"/>
            </button>
            :
            <h1
            className='btn btn-primary'
            disabled={loading}
            >
                 Friend Request Sent
            </h1>
              }    
					</div>
		</div>
    </div>
  </>
  )
}


export default Friend


// _id: new ObjectId('66ec5ee03b9e4fc4bae0389c'),
//     fullName: 'test1',
//     userName: 'test1',
//     gender: 'male',
//     profilePic: 'https://avatar.iran.liara.run/public/boy?username=test1',
//     createdAt: 2024-09-19T17:26:56.127Z,
//     updatedAt: 2024-09-30T14:46:43.891Z,
//     __v: 10,
//     fcmTokens: [],
//     friends: []

