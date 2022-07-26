import { getUser } from '../features/authSlice'
import { useSelector } from 'react-redux'
import { url } from '../network'

function Profile() {
  const user = useSelector(getUser)
  console.log(user)

  const handleUpdate = async(id)=>{
    try{
      const res = await url.put(`/auth/${id}`)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='mx-64 my-6'>
     <h2 className='flex justify-center items-center text-5xl py-3 font-bold'>Profile Settings</h2>
     <div className='flex p-5 items-center my-4'>
      <img src='/profile.jpg' className='h-36 w-36 object-cover rounded-full'/>
      <div>
       <button className='ml-10 px-10 py-3.5 bg-emerald-600 text-white text-xl rounded cursor-pointer'>change image</button>
      </div>
     </div>
     <div className='py-2 flex'>
      <div className='flex basis-1/2 flex-col p-1'>
        <label className='text-gray-700 text-xl my-1'>First name</label>
        <input className='outline-none h-14 mr-5 text-xl border pl-2 rounded' placeholder={user.username}/>
      </div>
      <div className='flex basis-1/2 flex-col p-1'>
        <label className='text-gray-700 text-xl my-1'>Last name</label>
        <input className='outline-none h-14 mr-5 text-xl border pl-2 rounded' placeholder='Last name'/>
      </div>
     </div>
     <div className='py-2 flex'>
      <div className='flex basis-1/2 flex-col p-1'>
        <label className='text-gray-700 text-xl my-1'>Email</label>
        <input className='outline-none h-14 mr-5 text-xl border pl-2 rounded' placeholder={user.email}/>
      </div>
      <div className='flex basis-1/2 flex-col p-1'>
        <label className='text-gray-700 text-xl my-1'>Address</label>
        <input className='outline-none h-14 mr-5 text-xl border pl-2 rounded' placeholder={user.address}/>
      </div>
     </div>
     <div className='py-2 flex'>
      <div className='flex basis-1/2 flex-col p-1'>
        <label className='text-gray-700 text-xl my-1'>Password</label>
        <input type='password' className='outline-none h-14 mr-5 text-xl border pl-2 rounded' placeholder='Password'/>
      </div>
      <div className='flex basis-1/2 flex-col p-1'>
        <label className='text-gray-700 text-xl my-1'>Remove account</label>
        <div>
         <button className='py-3 px-6 rounded bg-red-500 text-white hover:bg-red-600 my-1 outline-none'>Remove</button>
        </div>
      </div>
     </div>
     <div className='flex justify-center items-center py-3'>
      <button className='py-3 px-20 rounded bg-emerald-500 text-white hover:bg-emerald-600 my-1 outline-none'>Update</button>
     </div>
    </div>
  )
}

export default Profile