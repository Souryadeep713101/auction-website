import React from "react";





function Auction({ Key, index , product_name , product_image , start_day , end_day , highest_bid , start_price , status}){


    

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
                <td>RAYBAN</td>
                <td>{start_price}</td>
                <td>{highest_bid}</td>
                <td>{Date(start_day).toLocaleString()}</td>
                <td>0</td>
                
            </tr>
    </>
}


export default Auction;