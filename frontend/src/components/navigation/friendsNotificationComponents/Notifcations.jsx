
import useListenNotification from "../../../hooks/useListenNotification";
import useNotifications from "../../../zustand/useNotifications";
import Notification from "./Notification";
import useGetAllNotifications from "../../../hooks/useGetAllNotifications";
const Notifcations = () => {
    const {allNotifications,loading}=useNotifications();
    useGetAllNotifications();
    useListenNotification();
    return (
        <div className="py-2 flex flex-col overflow-auto">
          {allNotifications.map((notification)=>(
            <Notification
              key={notification._id}
              notification={notification}
            />
          ))
          }
          {loading?<span className="loading loading-spinner mx-auto"></span>:null}
        </div>
    )
}

export default Notifcations