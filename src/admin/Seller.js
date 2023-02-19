import React from "react";


function Seller ({ index , name , image , products_sold , safety_deposits , joining_date, total_sales}){




return <>
 <tr>
                <th>{index}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={image} />
                    </div>
                  </div>
                </td>
                <td>{name}</td>
                <td>{products_sold}</td>
                <td>{total_sales}</td>
                <td>{safety_deposits}</td>
                <td>{joining_date.toDate().toLocaleString()}</td>
                
            </tr>
</>
}


export default Seller