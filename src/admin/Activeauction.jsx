import React , {useContext , useState} from 'react'
import AdminInfoContext from "../AdminInfoContext"
import Auction from './Auction'

function Activeauction  ()  {
  const {products}  = useContext(AdminInfoContext)
  const [inputText , setInputText] = useState("")
  const onChange = (e)=>{

  setInputText (e.target.value)


  }

  
  return (
    <div className='p-5'>
      <div className='font-bold text-xl pb-4 text-white bg-slate-700 rounded-lg p-3'>Active Auctions</div>
      <div className='pt-3'>
      <div className="overflow-x-auto">
      <div className='grid grid-cols-6 grid-flow-col gap-4 py-2'>
      <div className='font-semibold text-3xl text-gray-500 col-start-1 col-end-3 pt-1'>Auction Details</div>
      <div className="form-control col-start-3 col-end-6">
        <input type="text" placeholder="Search" className="input input-bordered"  onChange = {onChange}/>
      </div>
    
      </div>
        
        <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Company/Seller</th>
                <th>Starting Bid</th>
                <th>Highest Bid</th>
                <th>Ending date</th>
                <th>Participants</th>
               
            </tr>
            </thead>
            <tbody>
            {products.filter((product)=>{


             
              return product.status === true;

            }).filter((product)=>{
             if(inputText.trim()!=''){
             const str = Object.values(product).toString()
             const regexp = RegExp(`${inputText}`, 'i')
             return regexp.test(str)
            }
            else{
             return true;
            }

            }).map((product , index)=>{
              return <Auction Key ={product.id} index = {index}   product_name = {product.product_name}  product_image ={product.product_image}  start_day = {product.start_day} end_day = {product.end_day} highest_bid = {product.highest_bid} start_price = {product.start_price} status = {product.status} / >
            })}
            </tbody>
        </table>
      </div>
      </div>  
    </div>
  )
}
export default Activeauction