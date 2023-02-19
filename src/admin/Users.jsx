import { getDocs, query , collection } from 'firebase/firestore'
import React, { useEffect , useState , useContext} from 'react'
import {db} from "../firebase.config"
import User from "./User"
import AdminInfoContext from '../AdminInfoContext'
import UserInfoContext from '../UserInfoContext'
function Users (){

  
const {users}  = useContext(AdminInfoContext)
const [inputText ,  setInputText] = useState("")

  const onChange  = (e)=>{

   setInputText(e.target.value);



  }




  return (
    <div className=' p-5'>
      <div className='font-bold text-xl py-5 text-white bg-slate-700 rounded-lg p-3' >Users</div>
      
      
      <div>
      <div className="overflow-x-auto pt-5 ">
      <div className='grid grid-cols-6 grid-flow-col gap-4 py-2'> 
      <div className='font-semibold text-3xl text-gray-500 pt-1'>User Details</div> 
      <div className="form-control col-start-3 col-end-6">
        <input type="text" placeholder="Search" onChange={onChange} className="input input-bordered" />
      </div>
      
      </div>          
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>User Name</th>
                        <th>Email Id</th>
                        <th>Phone Number</th>
                        <th>Buyer/Seller</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                     {
                      users.filter((user)=>{
                         
                        
                        if(inputText.trim()!=''){
                        const str = Object.values(user).toString()
                        const regexp = RegExp(`${inputText}`, 'i')
                        return regexp.test(str)
                        }
                        else{
                          return true;
                        }
    
     

                      }).map((user , index) => {
                        
                       
                      return <User index ={index} uid = {user.uid} Key = {user.id} name = {user.name} image = {user.image} email = {user.email} number = {user.number} userType = {user.userType} user_status = {user.user_status} / >
                      })
  
                    }

                   
                    </tbody>
                </table>
            </div>
      </div>
    </div>
  )
}
export default Users;