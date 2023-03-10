import React , {useContext} from 'react'
import AdminInfoContext from '../AdminInfoContext'

import TopProductItem from './TopProductItem'
function Dashboard (){

const {products} = useContext(AdminInfoContext)
  return (
    <div className='p-5'>
        <div className='font-bold text-xl py-5 text-white bg-slate-700 rounded-lg p-3' >
        Dashboard
        </div>
        <div className='grid grid-cols-8 py-2'>
        <div className='col-start-1 col-end-3 text-center '>
        <div className="card w-96 bg-base-100 shadow-xl py-3">
            <div className="card-body">
                <h1 className="card-title stat-title justify-center">Total Sales</h1>
                <p className='stat-value text-success' >Rs 1345000</p>
                <p className='stat-desc'>10% more than last week</p>
            </div>
        </div>
        <div className='pt-3'>
            <div className="card w-96 bg-base-100 shadow-xl py-3">
                <div className="card-body">
                    <h1 className="card-title stat-title justify-center">New Users</h1>
                    <p className='stat-value' >2,430</p>
                    <p className='stat-desc'>20% more than last week</p>
                </div>
            </div>
        </div>
        <div className='py-3'>
            <div className="card w-96 bg-base-100 shadow-xl py-3">
                <div className="card-body">
                    <h1 className="card-title stat-title justify-center">Total orders</h1>
                    <p className='stat-value' >52,300</p>
                    <p className='stat-desc'>20% more than last week</p>
                </div>
            </div>
        </div>
        </div>
        <div className='col-start-4 col-end-9'>
            <div className="overflow-x-auto">
                <div className='font-semibold text-lg text-gray-500'>Top Products</div>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Base Price</th>
                        <th>Sold Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product , index)=>{

return <TopProductItem  Key={product.id} index = {index} product_name = {product.product_name} base_price = {product.start_price} sold_price = {product.sold_price}/>

                })}
                    
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Dashboard