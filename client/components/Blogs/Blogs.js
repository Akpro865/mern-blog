import Link from 'next/link'
import styles from './blogs.module.css'

function Blogs({blogs}) {
  return (
    <div className={`${styles.container} flex flex-wrap`}>
    {blogs.map((blog, i) =>(
      <Link href={`/blog/${blog._id}`} key={i}>
       <div className='w-1/2 p-4 my-2 cursor-pointer' >
        <img src={blog.photo ? blog.photo : '/home.jpg'} className='w-full h-72 rounded-xl object-cover'/>
        {blog.categories.map((c, i) =>(
          <span className='flex justify-center text-orange-500 pt-0.5 text-sm' key={i}>{c}</span>
        ))}        
        <h2 className='text-2xl flex justify-center pb-1 font-bold text-gray-800'>{blog.title}</h2>
        <p className={`${styles.para} text-gray-800`}>{blog.desc.slice(0, 250)}...</p>
        <span className='text-sm text-gray-600 flex justify-end p-0.5'>{new Date(blog.createdAt).toDateString()}</span>
       </div>
      </Link>
    ))   
    }
    </div>
  )
}

export default Blogs