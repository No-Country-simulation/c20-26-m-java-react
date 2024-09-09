import React from 'react'

const Layout = ({children}) => {
  return (
    <div style={{maxWidth:"1200px", margin:"auto", padding:"0 10px"}}>
        {/* <p>Im a header</p> */}
        {children}
        {/* <p>Im a footer</p> */}
    </div>
  )
}

export default Layout