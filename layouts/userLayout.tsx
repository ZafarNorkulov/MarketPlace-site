import React from 'react'
import Header from '../components/header'

const UserLayout = ({children}:{children:any}) => {
  return (
    <>
    <Header/>
      {children}
    </>
  )
}

export default UserLayout