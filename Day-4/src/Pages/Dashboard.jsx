import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Header from '../Components/Header/Header'
const Dashboard = () => {
    const user=useSelector(selectUser)
  return (
    <div>
        <Header/>
        <p className='text-center'> 
            Welcome {user.email} !!
        </p>
    </div>
  )
}

export default Dashboard