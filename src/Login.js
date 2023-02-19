import SaleBell from './icons/saleBell.svg'
import google from './icons/google.png'
import { useNavigate } from 'react-router-dom'
import UserInfoContext from './UserInfoContext'
import { useContext } from 'react'
import {
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'
import AdminInfoContext from './AdminInfoContext'
import { getDoc , doc } from 'firebase/firestore'
import  {db} from "./firebase.config"
function Login() {
 
  const navigate = useNavigate()
  const { setUserData , changeUserType } = useContext(UserInfoContext)
  const {getAdminData} = useContext(AdminInfoContext)
  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      await setPersistence(auth, browserLocalPersistence)
      await signInWithPopup(auth, provider)
      
      const isDeactivatedAccount =await getDoc(doc(db , "users" ,auth.currentUser.uid ))
      if(isDeactivatedAccount.exists() && isDeactivatedAccount.data().user_status == false){
        navigate("/account-deactivated")
        await signOut(auth)
        window.location.reload()
      }else{ 
      const isAdmin = await getDoc(doc(db , "Admin" , auth.currentUser.uid));
      if(isAdmin.exists()) {
       
        changeUserType("admin"); 
        navigate("/admin");
      }
      else{
        navigate('/home')

      }
    }  
      } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='card glass px-4 w-96  shadow-2xl login-card'>
      <figure className='px-10 pt-10 '>
        <img src={SaleBell} alt='Shoes' className='rounded-xl ' />
      </figure>
      <div className='card-body items-center text-center'>
        <div className='card-actions'>
          <button
            onClick={handleSignIn}
            className='btn  btn-error glass shadow-md  text-bold'
          >
            Sign in With <img className='px-2' src={google} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
