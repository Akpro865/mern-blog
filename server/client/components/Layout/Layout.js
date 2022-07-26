import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BrowseRouter as Router } from 'react-router-dom'

function Layout({children}){
  return (
    <div>
      <Head>
       <title>blog</title>
      </Head>
      <Header />
        {children}            
      <Footer />
    </div>
  )
}

export default Layout