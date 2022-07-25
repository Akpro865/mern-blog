import styles from '../styles/Home.module.css'
import Featured from '../components/Featured/Featured'
import Blogs from '../components/Blogs/Blogs'
import Sidebar from '../components/Sidebar/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchCategory } from '../features/categorySlice'
import { useLocation } from 'react-router'
import { useRouter } from 'next/router'
import { url } from '../network'

function Home({blogs}) {
  //const [blogs, setBlogs] = useState([])
  
  const router = useRouter()  

  // if (typeof window !== "undefined") {
  //   var user = JSON.parse(localStorage.getItem('user'))
  // }
  useEffect(()=>{
    
    // const getBlogs = async()=>{
    //   const res = await axios.get(`http://localhost:5000/api/blogs`)
    //   setBlogs(res.data)
    // }    
    // getBlogs()  
    //dispatch(fetchCategory())
  }, [])
  console.log(blogs)
  return (
    <>
     <Featured />
     <div className='flex p-2'>
       <Blogs blogs={blogs}/>
       <Sidebar />
     </div>
    </>
  )
}

export default Home

export const getStaticProps = async (context)=>{
  const res = await url.get(`/blogs`)
  console.log(context)

  return {
    props: {
      blogs: res.data
    }
  }
}