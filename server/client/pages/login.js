import Link from 'next/link'
import styles from '../styles/auth.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { login } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import { url } from '../network'

function Login() {
  const [details, setDetails] = useState({
    email: " ", password: " "
  })

  const router = useRouter()
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    setDetails((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  
  console.log(details)
  const handleSubmit = ()=>{
    dispatch(login(details))
    router.push('/')
  }
  return (
    <div className={`${styles.login} flex justify-center items-center`}>
      <div className=''>
        <h2 className='text-3xl my-3 font-bold flex justify-center items-center'>LogIn</h2>
        <div className='py-3'>
         <label className='font-bold my-1'>Email</label>
         <input onChange={handleChange} type='email' name='email' placeholder='akpro@gmail.com' autoFocus className='w-full mt-3 pl-2 h-12 outline-none rounded'/>
        </div>
        <div className='py-3'>
         <label className='font-bold my-1'>Password</label>
         <input onChange={handleChange} type='password' name='password' placeholder='Password' className='w-full mt-3 pl-2 h-12 outline-none rounded'/>
        </div>
        <div className='flex justify-center items-center'>
         <button onClick={handleSubmit} className='px-10 my-5 outline-none hover:bg-green-500 rounded py-3 bg-green-600 font-bold text-white'>LogIn</button>
        </div>
        <span className='text-xs text-gray-600 flex justify-center items-center'>Create an account
         <Link href='/register'>
          <b className='ml-2 text-sm cursor-pointer font-semibold text-orange-500'>SignIn</b>
         </Link>
        </span>
      </div>
    </div>
  )
}

export default Login