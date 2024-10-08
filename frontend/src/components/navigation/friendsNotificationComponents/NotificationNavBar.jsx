import { Link } from 'react-router-dom'

const NotificationNavBar = () => {
  return (
    <div className="flex flex-row">
        <h1 className='text-white text-center flex-grow'>Notification</h1>
        <Link to={'/'} className=" justify-end bg-blue-500 rounded-lg text-white p-1 border-2 border-white">
        Back
        </Link>
    </div>
  )
}

export default NotificationNavBar;