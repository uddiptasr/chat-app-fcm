
import { IoIosNotifications } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useGetAllNotifications from "../../hooks/useGetAllNotifications";
import useListenNotification from "../../hooks/useListenNotification";

const Nav = () => {
 const {authUser}=useAuthContext();

useGetAllNotifications();
useListenNotification();


  return (
    <header className='bg-blue-800 h-[55px]'>
        <nav className='flex justify-between item-center w-[92%] mx-auto'>
            <div>
                <h1 className="text-white rounded-lg p-2 m-2 bg-blue-400 ">{authUser.fullName}</h1>
            </div>
            <div>
                <h1 className='text-white p-1 m-2'>CHAT APP</h1>
            </div>
            <div className="flex justify-end items-center">
                <Link to={'/findFriends'}>
                    <FaUserFriends className='w-7 h-7 text-white '/> 
                </Link>
                <Link  to={'/friendNotification'} className="p-1 m-2">
                    <IoIosNotifications  className='w-7 h-7 text-white '/>
                </Link>    
            </div>
           
        </nav>
    </header>
)
}

export default Nav


