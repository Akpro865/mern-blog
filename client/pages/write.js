import { GrAddCircle } from 'react-icons/gr'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getUser } from '../features/authSlice'
import { useSelector } from 'react-redux'

function Write() {
  const [desc, setDesc] = useState("")
  const [title, setTitle] = useState("")
  const [file, setFile] = useState(null)  
  
  const router = useRouter()
  const { username } = useSelector(getUser)
  
  const handleSubmit = async()=>{
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "blogApp")
    try{
      const dataRes = await axios.post("https://api.cloudinary.com/v1_1/dzyhtuc5s/image/upload",
        data
      )
      console.log(dataRes)
      const { url } = dataRes.data
      const newBlog = {
        title,
        desc,
        username,
        photo: url
      }
      console.log(newBlog)
      await axios.post('http://localhost:5000/api/blogs', newBlog)
      router.push('/')
    }catch(err){
      console.log(err)
    }
  }
  console.log(title, desc, username, file)
  return (
    <div className='px-14 py-6 mx-16'>
     <div className='flex justify-center items-center'>
     { file &&
       <img src={file[0]} className='h-64 w-full rounded-xl object-cover' />
     }
     </div>
     <div>
      <div className='flex py-6 items-center'>
        <label htmlFor='img'>
          <GrAddCircle className='mr-3 text-2xl cursor-pointer font-bold'/>
        </label>
        <input onChange={e=>setFile(e.target.files[0])} type='file' name='img' id='img' className='hidden' />
        <input onChange={e=>setTitle(e.target.value)} value={title} name='title' className='w-full h-12 rounded text-2xl outline-none border pl-2' placeholder='write your title...'/>
        <button onClick={handleSubmit} className='py-3 px-6 rounded outline-none bg-teal-600 text-white font-bold hover:bg-teal-500 ml-2'>publish</button>
      </div>
     </div>
     <textarea onChange={e=>setDesc(e.target.value)} value={desc} name='desc' placeholder='write something here....' className='w-full pl-4 h-80 outline-none mx-2 rounded border'></textarea>
    </div>
  )
}

export default Write