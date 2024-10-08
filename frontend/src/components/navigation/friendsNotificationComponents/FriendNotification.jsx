import Notifcations from "./Notifcations"
import NotificationNavBar from "./NotificationNavBar"

const FriendNotification = () => {
  return (
    <div className='md:min-w-[700px] md:min-h-[500px]  p-4 flex flex-col rounded-lg overflow-hidden  bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <NotificationNavBar/>
        <div className='divider border-white'></div>
        <Notifcations/>
    </div>
  )
}

export default FriendNotification