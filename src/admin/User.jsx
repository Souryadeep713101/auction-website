import { updateDoc , doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase.config";



function User({ index ,uid ,  name ,  email , number , userType ,  image , user_status}){
    console.log(uid)
    const onClick = async()=>{



      console.log(uid);
      if(user_status) {
        
        
        await updateDoc(doc(db , "users" , uid) , {user_status : false})

      }
      else{
        await updateDoc(doc(db , "users" , uid) , {user_status : true})
      }

   window.location.reload()

    }
return(
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
  <td>{email}</td>
  <td>{number}</td>
  <td>{userType}</td>
  <td>
    
      
      <button className={`btn ${user_status  ? "btn-warning" : "btn-accent" }`}  onClick={onClick} >  
      {user_status ? <span>Deactive</span> : <span>Active</span> } 
       </button>
   
    
  </td>
</tr>

)


}


export default User;