import { deleteDoc, doc, getDoc, query , collection , where, getDocs} from "firebase/firestore";
import React from "react";
import {db}  from "../firebase.config"


function Product({ Key, index , product_name , product_image , start_day , end_day , highest_bid , start_price , status}) {

const onClick = async()=>{
try{
   
     await deleteDoc(doc(db , "product" , Key));
  
  
  
  window.location.reload()
}
catch(err){
  console.log(err);
}

}

return <>
<tr>
                <th>{index}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={product_image} />
                    </div>
                  </div>
                </td>
                <td>{product_name}</td>
                <td>Roy Brothers</td>
                <td>{Date(start_day).toLocaleString()} - {Date(end_day).toLocaleString()}</td>
                <td>{start_price}</td>
                <td>{highest_bid}</td>
                <td>{status ? "Active"  : "Ended"}</td>
                <td><div className='btn btn-error' onClick = {onClick}>Remove</div></td>
            </tr>
            
</>

}


export default  Product;