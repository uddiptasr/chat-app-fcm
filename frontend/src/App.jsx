import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/home/home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import {Navigate, Route,Routes} from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
import useNotificationPermission from './hooks/useNotificationPermission'
import FindFriends from './components/navigation/FindFriends'
import FriendNotification from './components/navigation/friendsNotificationComponents/FriendNotification'
function App() {
  const {authUser}=useAuthContext();
  
  useNotificationPermission();  


  return (
    <div className='p-4  h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/> }/>
        <Route path='/login' element={authUser ? <Navigate to='/'/> :<Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/'/> : <SignUp/>}/>
        <Route path='/findFriends' element={authUser ? <FindFriends/> : <Navigate to='/'/>}/>
        <Route path='/friendNotification' element={authUser ? <FriendNotification/> : <Navigate to='/'/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
