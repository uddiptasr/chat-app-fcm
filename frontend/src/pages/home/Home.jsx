import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer' 
import Nav from '../../components/navigation/Nav'

const Home = () => {
    
  return (
    <div>
        <Nav/>
        <div className='flex sm:h-[700px] md:h-[800px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0 '>
            <Sidebar/>
           <MessageContainer/>
        </div>
    </div>
  )
}

export default Home