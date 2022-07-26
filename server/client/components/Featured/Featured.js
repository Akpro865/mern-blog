import styles from './featured.module.css'

function Featured() {
  return (
    <div className={`${styles.container} overflow-hidden mx-3 lg:mx-20 pt-4 flex`}>
     <div className='w-1/3 relative'>
      <h2 className='pt-8 pl-4 hidden lg:block text-3xl font-semibold text-gray-900'>Learn & improve knowledge anytime</h2>   
      <div className='absolute bottom-24'>
       <p className={`${styles.para} text-gray-700 py-2 indent-8`}>I’m going through my bookmarks to stay organized and I came across a great blog which I had forgotten about. I often bookmark interesting blogs or websites I find, and then forget.</p>
       <div className='py-4 flex justify-center font-medium'>
         <button className='mx-3 px-5 py-2 text-white  rounded bg-indigo-600 hover:bg-indigo-800 border'>Learn</button>
         <button className='mx-3 px-5 py-2 rounded hover:bg-indigo-600 hover:text-white border border-indigo-600'>More</button>
       </div>
      </div>
     </div>
    <div className='w-2/3 overflow'>     
      <img src='blog.jpg' className='h-full w-full p-8 object-center object-cover'/>     
    </div>
    </div>
  )
}

export default Featured