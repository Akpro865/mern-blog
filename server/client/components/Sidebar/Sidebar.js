import { BsTwitter } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import styles from './sidebar.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getCategories } from '../../features/categorySlice'

function Sidebar() {
  const categories = useSelector(getCategories)

  return (
    <div className={`${styles.container} p-1`}>
     <h3 className='py-2 my-2 border-t-2 border-b-2 text-xl text-gray-800 font-bold flex justify-center'>About me</h3>
     <img src='/wallpapers/pro.jpg' className='w-full h-64 my-4 object-cover rounded-xl'/>
     <p className='text-gray-800 p-2'>We everyone loves the nature, but no one is try to preserve nature. Nature is gifted by god. So try to love nature feel nature.</p>
     <h3 className='py-2 my-2 text-xl text-gray-800 font-bold flex justify-center'>categeories</h3>
     <ul className='font-medium flex p-2 justify-evenly text-blue-600'>
      <div>
       {categories.map((category, i) =>(
         <Link href={`?cats=${category.name}`} key={i}>
          <li className='py-1 cursor-pointer'>{category.name}</li>
         </Link>         
        ))}
      </div>
     </ul>
     <div className='flex flex-col justify-center items-center'>
      <h5 className='text-gray-900 font-bold py-4 sm:text-xl'>Follow us on</h5>
      <div className='flex text-2xl'>
         <Link href='https://twitter.com/Akpro768'>
         <span className='bg-sky-200 p-2 m-1 cursor-pointer rounded-full text-sky-600 hover:-translate-y-1 transition'><BsTwitter /></span>
         </Link>
         <Link href='https://web.whatsapp.com/'>
         <span className='bg-green-300 p-2 m-1 cursor-pointer rounded-full text-green-600 hover:-translate-y-1 transition'><RiWhatsappFill /></span>
         </Link>
         <Link href='https://www.youtube.com/'>
         <span className='bg-red-200 p-2 m-1 cursor-pointer rounded-full text-red-600 hover:-translate-y-1 transition'><AiFillYoutube/></span>
         </Link>
         <Link href='https://www.facebook.com/'>
         <span className='bg-blue-200 p-2 m-1 cursor-pointer rounded-full text-blue-600 hover:-translate-y-1 transition'><BsFacebook /></span>
         </Link>
         <Link href='Instagramhttps://www.instagram.com'>
         <span className='bg-pink-200 p-2 m-1 cursor-pointer rounded-full text-pink-700 hover:-translate-y-1 transition'><AiFillInstagram /></span>                              
         </Link>
      </div>
     </div>
    </div>
  )
}

export default Sidebar