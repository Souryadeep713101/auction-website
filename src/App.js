import Login from './Login'
import Buy from './Buy'
import Sell from './Sell'
import About from './About'
import Wallet from './Wallet'
import Error from './Error'
import Home from './Home'
import Profile from './Profile'
import Item from './Item'
import { UserInfoContextProvider } from './UserInfoContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from "./admin/Admin"
import Sellers from "./admin/Sellers"
import Products from "./admin/Products"
import Accounts from "./admin/Accounts"
import Shipping from "./admin/Shipping"
import Activeauction from "./admin/Activeauction"
import Dashboard  from "./admin/Dashboard"
import Users from  "./admin/Users"
import {AdminInfoContextProvider} from "./AdminInfoContext"
import AccountDeactivated from './AccountDeactivated'
function App() {
  return (
    <>
      <UserInfoContextProvider>
        <AdminInfoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/account-deactivated' element={<AccountDeactivated />} />
            {/* Admin */}
            <Route  path="/admin" element={<Admin/>} >
        <Route index  element={<Dashboard/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="sellers" element={<Sellers/>}/>
        <Route path="activeauction" element={<Activeauction/>}/>
        <Route path="accounts" element={<Accounts/>}/>
        <Route path="shipping" element={<Shipping/>}/>
        <Route path='*' element={<Error />} />

        </Route>




            {/* Buyer-Seller */}

            <Route path='/home' element={<Home />}>
              <Route index element={<Buy />} />
              <Route path='Sell' element={<Sell />} />
              <Route path='About' element={<About />} />
              <Route path='Wallet' element={<Wallet />} />
              <Route path='Profile' element={<Profile />} />
              <Route path='item/:id' element={<Item />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>

        </AdminInfoContextProvider>
      </UserInfoContextProvider>
    </>
  )
}

export default App
