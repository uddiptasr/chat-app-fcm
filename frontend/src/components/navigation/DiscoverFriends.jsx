import useGetAllUsers from "../../hooks/useGetAllUsers";
import Friend from "./Friend";

const DiscoverFriends = () => {
  const {loading,allUsers}=useGetAllUsers();
  return (
      <div className="py-2 flex flex-col overflow-auto">
        {allUsers.map((user)=>(
          <Friend
            key={user._id}
            friend={user}
          />
        ))
        }
        {loading?<span className="loading loading-spinner mx-auto"></span>:null}
      </div>
  )
}

export default DiscoverFriends