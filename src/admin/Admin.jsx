import React from 'react'
import {Link, Outlet , useNavigate} from 'react-router-dom'
import {useContext}  from "react"
import UserInfoContext from '../UserInfoContext'
import { useEffect } from 'react';
import AdminInfoContext from '../AdminInfoContext';
import {auth}  from "../firebase.config"
import { useState } from 'react';
import Spinner from '../Spinner';
import {signOut } from 'firebase/auth';

 function Admin() {
  const navigate = useNavigate()
  const {user , setUserData , userType} = useContext(UserInfoContext);
   const {getAdminData}   = useContext(AdminInfoContext)
   const [loading , setLoading] = useState(true)
useEffect(()=>{

const fetchData   =  async()=>{
  await getAdminData()
  await setUserData(auth.currentUser , userType );
  setLoading(false);
}
fetchData();

} , [])


const onLogOut = async()=>{

  await signOut(auth)
  
  navigate("/")
  window.location.reload()

}



  return  loading ?  <Spinner /> :
   <>
     <div className="App bg-white">
     <div className='grid grid-cols-6'>
     <div className="col-start-1 col-end-2">
   <div className="drawer drawer-mobile sticky top-0">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden ">
      <div class="space-y-2">
    <div class="w-8 h-0.5 bg-gray-600"></div>
    <div class="w-8 h-0.5 bg-gray-600"></div>
    <div class="w-8 h-0.5 bg-gray-600"></div>
  </div>
      </label>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
      <li className='font-bold text-center text-2xl pt-4'>SELL-BELL</li>
      <br /><br />
        <li><Link to='/admin'>DashBoard</Link></li>
        <li><Link to='/admin/users'>Users</Link></li>
        <li><Link to='/admin/products'>Products</Link></li>
        <li><Link to='/admin/sellers'>Sellers</Link></li>
        <li><Link to='/admin/activeauction'>Active Auction</Link></li>
        <li><Link to='/admin/accounts'>Accounts</Link></li>
        <li><Link to='/admin/shipping'>Shipping</Link></li>
        <li className='absolute inset-x-0 bottom-0 pl-3'>
          
        <p>{user.name}</p>  
        <div className='w-20 rounded-full'>

              <img src={user.image} />
            </div>
          <button onClick={onLogOut}>Logout</button></li>
      </ul>
    
    </div>
  </div>
  </div>
  <div className="col-start-2 col-end-7 ">
    <Outlet />
  </div>

  </div>
  </div>
  </>
    
}
export default Admin;