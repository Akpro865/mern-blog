import Link from 'next/link'
import styles from './header.module.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../features/authSlice'
import { useEffect, useState } from 'react'
import { getCategories } from '../../features/categorySlice'
import { addAuth } from '../../features/authSlice'
import { useDispatch } from 'react-redux'

function Header() {
  const [user, setUser] = useState(null)
  const localUser = useSelector(getUser)
  const categories = useSelector(getCategories)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(addAuth())   
    setUser(localUser)
  },[localUser])
  return (
    <div className='flex justify-between sticky top-0 z-20 bg-white items-center shadow-sm py-4 px-4 lg:px-10 mt-4'>
      <div className='flex sm:ml-16'>
       <Link href='/'>
        <h2 className='text-4xl font-bold cursor-pointer border-r-4 pr-4 lg:pr-8'>AK</h2>
       </Link>
        <span className='px-4 flex items-center text-blue-400 font-semibold text-xl'>blog</span>
      </div>
      <div className='flex items-center sm:mr-20'>         
          <div className={`${styles.profile} px-2`}>
           <Link href='/'>
            <span className='hover:text-blue-500'>Home</span>
           </Link>
           <div className={`${styles.options} bg-white border shadow-md py-3 px-8`}>
            <span className='py-4 px-2 border-b hover:text-blue-500'>Convert</span>
            <span className='py-4 px-2 hover:text-blue-500'>Documentation</span>
           </div>
          </div>
        <span className='px-3 hover:text-blue-500 cursor-pointer'>About</span>
        <span className='hover:text-blue-500 px-3 cursor-pointer'>Contact</span>
        <Link href='/write'>
          <span className='hover:text-blue-500 px-3 cursor-pointer'>Write</span>
        </Link>
        <span className='hover:text-blue-500 pl-3 cursor-pointer'>More</span>
        <div className='flex items-center'>
        <input className='h-10 rounded-full outline-none bg-sky-50 pl-2 lg:w-48 sm:w-20 lg:ml-16' placeholder='Search...'/>
        <div>
         {user ? (
          <Link href='/profile'>
           <img src='/profile.jpg' className='h-10 cursor-pointer w-10 ml-3 object-center object-cover  rounded-full'/>                
          </Link>
          ) : (
           <Link href='/login'>
            <button className='px-5 py-2 ml-3 text-white  rounded bg-indigo-600 hover:bg-indigo-800 border'>LogIn</button>
           </Link>
          )
         }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header