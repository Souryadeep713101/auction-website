import { createContext, useState } from "react";
import { db } from "./firebase.config";
import {getDocs , query , collection} from "firebase/firestore"

const AdminInfoContext  = createContext();


export const AdminInfoContextProvider  = ({children})=>{

const [users , setUsers] = useState([])
const [sellers , setSellers] = useState([])
const [products , setProducts] = useState([])

const getAdminData = async()=>{

const userSnapShot = await getDocs(query(collection(db , "users")))
const sellerSnapShot = await getDocs(query(collection(db , "seller")))
const productSnapShot = await getDocs(query(collection(db ,"product" )))

const usersArray = []
const sellerArray = []
const productsArray = []
userSnapShot.forEach((user)=>{
       console.log(user.data().uid);
        usersArray.push({...user.data(),id: user.id })


})
sellerSnapShot.forEach((seller)=>{

   sellerArray.push({id :  seller.id , ...seller.data()});

})
productSnapShot.forEach((product)=>{

    productsArray.push({id :  product.id , ...product.data()});
 
 })
 
setUsers((prevUsers)=>{


    return [...prevUsers , ...usersArray]
})

setSellers((prevSeller)=>{
    return [...prevSeller , ...sellerArray]
})

setProducts((prevProduct)=>{


return [...prevProduct , ...productsArray]

})


}


return <AdminInfoContext.Provider  value={{getAdminData, users , sellers , products}} >
    {children}
</AdminInfoContext.Provider>

}

export default AdminInfoContext