import GenderCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import useSignup from '../../hooks/useSignup.js'
const SignUp = () => {

    const [inputs,setInputs] =useState({
        fullName:'',
        userName:'',
        password:'',
        confirmPassword:'',
        gender:''
    })

const {loading,signup}=useSignup();
const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender})
}

const  handleSubmit=async(e)=>{
    e.preventDefault();
    await signup(inputs)
}

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bd-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
                SignUp
                <span className='text-blue-500'>ChatApp</span>
            </h1> 
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-300' >Full Name</span>
                    </label>
                    <input type='text' placeholder='Enter FullName' className='w-full input input-bordered h-10'
                    value={inputs.fullName}
                    onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-300' >UserName</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
                         value={inputs.userName}
                         onChange={(e)=>setInputs({...inputs,userName:e.target.value})}
                        />
                </div>
                <div>
                    <label className='label '>
                        <span className='text-base label-text text-gray-300' >Password</span>
                    </label> 
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
                         value={inputs.password}
                         onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                        />
                </div>
                <div>
                    <label className='label '>
                        <span className='text-base label-text text-gray-300' >Confirm Password</span>
                    </label> 
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
                         value={inputs.confirmPassword}
                         onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                        />
                </div>


                <GenderCheckBox onCheckBoxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to={'/login'} className='text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </Link>
                
                <div>
                    <button className='btn btn-block btn-sm mt-2 border-slate-700' disabled={loading}>
                        {loading?<span className='loading loading-spinner'></span>:"SignUp"}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp