import React from 'react'
import Seller from './Seller';
import {useContext} from "react"
import AdminInfoContext from "../AdminInfoContext";
function Sellers () {

  const {sellers} = useContext(AdminInfoContext)
  console.table(sellers)



  return (
    <div className='p-5'>
      <div className='font-bold text-xl pb-4 text-white bg-slate-700 rounded-lg p-3'>Seller</div>
      
      <div className='pt-3'>
      <div className="overflow-x-auto">
      <div className='grid grid-cols-6 grid-flow-col gap-4 py-2'>
      <div className='font-semibold text-3xl text-gray-500 col-start-1 col-end-3 pt-1'>Seller Details</div>
      <div className="form-control col-start-3 col-end-6">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      
      </div>
        
        <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Image</th>
                <th>User Name</th>
                <th>Products Sold</th>
                <th>Total Sales(Rs)</th>
                <th>Safety Deposits(Rs)</th>
                <th>Joining Date</th>
            
            </tr>
            </thead>
            <tbody>
              {sellers.map((seller , index )=>{
               
              return <Seller Key = {seller.id} index={index}   name = {seller.name}  image = {seller.image}  products_sold  = {seller.products_sold}  safety_deposits = {seller.safety_deposits}  joining_date = {seller.joining_date}  total_sales ={seller.total_sales}  />
            })}
            </tbody>
        </table>
      </div>
      </div>  
    </div>
  )
}
export default Sellers;