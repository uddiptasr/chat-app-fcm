import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchFriendBar = () => {
    const [search,setSearch]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!search) return;
        if(search.length <3){
            return toast.error('Search term must be at least 3 character long')
        }
    }
    
  return (
    <div className=' p-1 flex justify-between gap-2' >
        
        {/* <div className='text-white p-1'>Search Friend</div> */}
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <   input type="text" placeholder='Search..' 
            className='input input-bordered rounded-full'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            <button type='submit' className='btn btn-circle bg-sky-500 text-white' >
                <FaSearch/>
             </button>
        </form>

        <Link to={'/'} className="bg-blue-500 rounded-lg text-white p-1 border-2 border-white">
        Back
        </Link>
    </div>
  )
}

export default SearchFriendBar

 // <div className="bg-blue-500 md:min-w-[700px] md:min-h-[500px] flex flex-row justify-between ">
        
    //     <Link to={'/'} className="bg-blue-500 text-white h-[40px] p-2 border-2 border-white">Back</Link>
    // </div>