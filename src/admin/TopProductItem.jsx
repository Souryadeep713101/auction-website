import React from "react";




function TopProductItem({  index ,  product_name   , base_price ,  sold_price }){



return <>
  <tr>
                        <th>{index}</th>
                        <td>{product_name}</td>
                        <td>Rs {base_price}</td>
                        <td>Rs {sold_price}</td>
 </tr>

</>
}


export default TopProductItem