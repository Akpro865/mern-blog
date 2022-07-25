import Link from 'next/link'
import styles from '../styles/auth.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { url } from '../network'

function Register() {
  const [details, setDetails] = useState({
    username: " ", email: " ", password: " "
  })

  const router = useRouter()

  const handleChange = (e)=>{
    setDetails((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  
  console.log(details)
  const handleSubmit = ()=>{
    try{
      const register = async()=>{
        const res = await url.post('/auth/register', details)
        router.push('/login')
      }
      register()      
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className={`${styles.register} flex justify-center items-center`}>
      <div className=''>
        <h2 className='text-3xl my-3 font-bold flex justify-center items-center'>Register Now</h2>
        <div className='py-3'>
         <label className='font-bold my-1'>Username</label>
         <input placeholder='Prokumar' onChange={handleChange} name='username' autoFocus className='w-full mt-3 pl-2 h-12 outline-none rounded'/>
        </div>
        <div className='py-3'>
         <label className='font-bold my-1'>Email</label>
         <input type='email' onChange={handleChange} name='email' placeholder='akpro@gmail.com' className='w-full mt-3 pl-2 h-12 outline-none rounded'/>
        </div>
        <div className='py-3'>
         <label className='font-bold my-1'>Password</label>
         <input type='password' onChange={handleChange} name='password' placeholder='Password' className='w-full mt-3 pl-2 h-12 outline-none rounded'/>
        </div>
        <div className='flex justify-center items-center'>
         <button onClick={handleSubmit} className='px-10 my-5 hover:bg-green-500 outline-none rounded py-3 bg-green-600 font-bold text-white'>Register</button>
        </div>
        <span className='text-xs text-gray-600 flex justify-center items-center'>Already have account
         <Link href='/login'>
          <b className='ml-2 text-sm cursor-pointer font-semibold text-orange-500'>LogIn</b>
         </Link>
        </span>
      </div>
    </div>
  )
}

export default Register