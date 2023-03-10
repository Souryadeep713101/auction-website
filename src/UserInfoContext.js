import { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, getDocs, setDoc, collection } from 'firebase/firestore'
import { db } from './firebase.config.js'
const UserInfoContext = createContext()

export const UserInfoContextProvider = ({ children }) => {
  const [userType , setUserType] = useState("buyer");

  const [user, setUser] = useState({
    uid: '',
    name: '',
    email: '',
    number: '',
    pincode: '',
    address: '',
    image: '',
    userType : '',
    user_status : ''
  })
  const [products, setProducts] = useState([])
  const [wallet, setWallet] = useState({ total_amount: 0 })
  const [searchProducts, setSearchProducts] = useState([])

  const setUserData = async (User , userType) => {
    
    const docRef = doc(db, 'users', User.uid)
    const walletRef = doc(db, 'wallet', User.uid)
    const docSnap = await getDoc(docRef)
    // User not existing
    if (!docSnap.exists()) {
      
      await setDoc(docRef, {
        uid: User.uid,
        name: User.displayName,
        email: User.email,
        number: '',
        pincode: '',
        address: '',
        image : User.photoURL,
        userType,
        user_status : true
      })
      setUser((prevUser) => {
        return {
          ...prevUser,
          name: User.displayName,
          uid: User.uid,
          image: User.photoURL,
          email: User.email,
          number: '',
          pincode: '',
          address: '',
          userType : userType,
          user_status : true
        }
      })

      const walletSnapShot = await setDoc(walletRef, {
        total_amount: 0,
        amount_in_auction :  0,
        uid :  User.uid , 
        remaining_amount : 0 ,
        total_purchase : 0
      })
    } else {
      //For Existing User
      const data = docSnap.data()
     
      setUser((prevUser) => {
        
        return {
          ...prevUser,
          name: data.name,
          uid: data.uid,
          image: User.photoURL,
          email: data.email,
          number: data.number,
          pincode: data.pincode,
          address: data.address,
          userType : data.userType,
          user_status :  data.user_status
        }
      })
   
      const walletSnap = await getDoc(walletRef)
      const walletData = walletSnap.data()
      setWallet((prevWallet) => {
        return { ...prevWallet, ...walletData}
      })
    }
  }

  const fetchProducts = async () => {
    
    const productSnapshot = await getDocs(collection(db, 'product'))
    const ProductArray = []
    setProducts([])
    productSnapshot.forEach((doc) => {
      var data = doc.data()
      const id = doc.id
      data = { ...data, id }
      ProductArray.push(data)
    })

    setProducts((prevProduct) => {
      return [...prevProduct, ...ProductArray]
    })
    filterProducts('')
  }

  const filterProducts = (input) => {
 
    var filteredProduct = products
    if (input != '') {
      filteredProduct = products.filter((product) => {
        const str = Object.values(product).toString()
        const regexp = RegExp(`${input}`, 'i')
        return regexp.test(str)
      })
    }

    setSearchProducts(filteredProduct)
  }


const changeUserType = (userType)=>{

setUserType(userType)

}





  return (
    <UserInfoContext.Provider
      value={{
        user,
        setUserData,
        wallet,
        products,
        fetchProducts,
        filterProducts,
        searchProducts,
        userType , 
        changeUserType
      }}
    >
      {children}
    </UserInfoContext.Provider>
  )
}
export default UserInfoContext
