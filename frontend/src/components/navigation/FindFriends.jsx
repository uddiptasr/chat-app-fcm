import SearchFriendBar from "./SearchFriendBar"
import DiscoverFriends from "./DiscoverFriends"

const FindFriends = () => {
  return (
        <div className='md:min-w-[700px] md:min-h-[500px]  p-4 flex flex-col rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0 '>
             <SearchFriendBar/>
        <div className='divider px-3'></div>
             <DiscoverFriends/>
        </div>
  )
}

export default FindFriends
