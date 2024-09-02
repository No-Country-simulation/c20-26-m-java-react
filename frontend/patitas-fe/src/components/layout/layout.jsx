import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <p>Im a header</p>
        {children}
        <p>Im a footer</p>
    </div>
  )
}

export default Layout