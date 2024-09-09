import React from 'react'
import './layout.scss'
import Footer from '../footer/footer'
import Header from '../header/header'

const Layout = ({children}) => {
  return (
    <div className='layoutWrapper'>
        <Header />
        <div className='contentWrapper'>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout