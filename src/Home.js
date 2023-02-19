import Header from './Header'
import Footer from './Footer'
import { Outlet, Navigate } from 'react-router-dom'
import useAuthstatus from './useAuthStatus'
import Spinner from './Spinner'
import { useEffect } from 'react'
import { useContext } from 'react'
import UserInfoContext from './UserInfoContext'
import { auth } from "./firebase.config"
export default function Home() {
  const {setUserData} = useContext(UserInfoContext)
  const { checkStatus, loggedIn } = useAuthstatus()
  useEffect(()=>{
   const userDataFetch = async  ()=>{
     await setUserData(auth.currentUser , "buyer")
   }
   userDataFetch()
  } , [])

  {
    if (checkStatus) {
      return <Spinner />
    } else {
      return loggedIn ? (
        <>
          <Header /> <Outlet /> <Footer />
        </>
      ) : (
        <Navigate to='/' />
      )
    }
  }
}
