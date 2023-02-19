import React , {useContext , useState} from 'react'
import Product from './Product';
import AdminInfoContext from '../AdminInfoContext';
function Products () {
  const {products}  = useContext(AdminInfoContext)
  const [inputText , setInputText] = useState("")
  const onChange = (e)=>{

  setInputText (e.target.value)


  }


  return (
    <div className='p-5'>
      <div className='font-bold text-xl pb-4 text-white bg-slate-700 rounded-lg p-3'>Products</div>
      
      <div className='pt-3'>
      <div className="overflow-x-auto">
      <div className='grid grid-cols-6 grid-flow-col gap-4 py-2'>
      <div className='font-semibold text-3xl text-gray-500 col-start-1 col-end-3 pt-1'>Product Details</div>
      <div className="form-control col-start-3 col-end-6">
        <input type="text" onChange = {onChange} placeholder="Search" className="input input-bordered" />
      </div>
      
      </div>
        
        <table className="table w-full">
            <thead>
            <tr>
                <th>Product Id</th>
                <th>Image</th>
                <th>Product</th>
                <th>Company/Seller</th>
                <th>Bidding Time Frame</th>
                <th>Base Price</th>
                <th>Highest Bid</th>
                <th>Status</th>
                <th>Action</th>
         
                
            </tr>
            </thead>
            <tbody>
            {products.filter((product)=>{
             if(inputText.trim()!=''){
             const str = Object.values(product).toString()
             const regexp = RegExp(`${inputText}`, 'i')
             return regexp.test(str)
            }
            else{
             return true;
            }

            }).map((product , index)=>{
              return <Product Key ={product.id} index = {index}   product_name = {product.product_name}  product_image ={product.product_image}  start_day = {product.start_day} end_day = {product.end_day} highest_bid = {product.highest_bid} start_price = {product.start_price} status = {product.status} / >
            })}
            </tbody>
        </table>
      </div>
      </div>
      <div className='grid place-content-center p-5 '>
      <div className="stats shadow">    
        <div className="stat px-20 py-5">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="stat-title">Biggest Seller</div>
          <div className="stat-value">105</div>
          <div className="stat-desc">Das Brothers</div>
        </div>
        
        <div className="stat px-20 py-5">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div className="stat-title">Single Bid Highest participation</div>
          <div className="stat-value">45</div>
          <div className="stat-desc">Watch(Rolex)</div>
        </div>
        
        <div className="stat px-20 py-5">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div className="stat-title">Sell Bell Certified Seller</div>
          <div className="stat-value">198</div>
          <div className="stat-desc"></div>
        </div> 
      </div>
      </div>
    </div>
  )
}
export default Products;
