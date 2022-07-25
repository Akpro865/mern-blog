import styles from '../../styles/blog.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import { FiEdit } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getUser } from '../../features/authSlice'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { addAuth } from '../../features/authSlice'
import { fetchCategory } from '../../features/categorySlice'
import { useDispatch } from 'react-redux'

function Blog({blog}) {
  const [title, setTitle] = useState(blog.title)
  const [desc, setDesc] = useState(blog.desc)
  const [updateMode, setUpdateMode] = useState(false)
  const user = useSelector(getUser)
  const router = useRouter()
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(addAuth())
  //   dispatch(fetchCategory())
  // }, [])
  const handleDelete = async(id)=>{
    try{
      const res = await axios.delete(`http://localhost:5000/api/blogs/${id}`,{
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          },
          data: {
            username: user.username
          }
        })
      router.push('/')
    }catch(err){
      console.log(err)
    }
  }
  
  const handleEdit = async(id)=>{
    const username = user.username
    try{
      const res = await axios.put(`http://localhost:5000/api/blogs/${id}`, {
        username, title, desc
      })
      setUpdateMode(false)   
    }catch(err){
      console.log(err)
    }
  }
  console.log(title, desc, user)
  return (
    <div className='flex'>
     <div className={`${styles.container} px-10 pt-6`}>
      <img src={blog.photo ? blog.photo : '/wallpapers/mountain.jpg'} className='h-72 w-full rounded-xl object-cover'/>
      {
        (blog.username === user.username) ? (
        <div className='flex justify-end text-xl mt-2'>
         <div onClick={()=>setUpdateMode(true)} className='bg-green-300 p-2 rounded-full mr-4 cursor-pointer'>
           <FiEdit className='text-green-600'/>
         </div>
         <div onClick={()=>handleDelete(blog._id)} className='bg-red-300 p-2 rounded-full cursor-pointer'>
           <AiFillDelete className='text-red-600'/>
         </div>
        </div>
        ) : null
      }
      {
        updateMode ? (
          <input onChange={e=>setTitle(e.target.value)} value={title} autoFocus className='rounded w-full outline-none border-b text-xl'/>
        ) : (
          <h3 className='py-4 text-3xl font-bold'>{blog.title}</h3>
        )
      }      
      <div className='flex justify-between text-orange-500 my-1'>
       <Link href={`/?user=${blog.username}`}>
        <span className='cursor-pointer'>Author: {blog.username}</span>
       </Link>
       <span className='text-sm'>{new Date(blog.createdAt).toDateString()}</span>
      </div>
      {updateMode ? (
        <textarea onChange={e=>setDesc(e.target.value)} value={desc} className='p-1 outline-none rounded border w-full h-72'/>
      ) :
      (
        <div className={`${styles.paras} text-xl px-2`}>
        <p>{blog.desc}</p>
        </div>
      )}
      {
      updateMode ? <div className='flex justify-end p-2'><button onClick={()=>handleEdit(blog._id)} className='py-2 px-3 bg-green-500 rounded font-bold text-white'>update</button></div> : null
      }     
     </div>
     
     <Sidebar />
    </div>
  )
}

export default Blog

export const getServerSideProps = async ({params})=>{
  const res = await axios.get(`http://localhost:5000/api/blogs/find/${params.id}`)

  return {
    props: {
      blog: res.data
    }
  }
}