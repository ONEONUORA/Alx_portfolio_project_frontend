
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import UserAuthForm from './pages/userAuthForm';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { lookInSession } from './common/session';
import HomePage from './pages/homepage';
import Verify from './pages/verifyUser';
import Dashboard from './pages/userDashboard';
import PageNotFound from './pages/404.page';
import Wallet from './pages/wallet';
import History from './pages/history';
import Profile from './pages/userProfile';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import Buy from './pages/buy';
import Sell from './pages/sell';
import Swap from './pages/swap';
import Card from './pages/card';
import Bills from './pages/bills';
import Transfer from "./pages/transfer"
import About from './pages/aboutus';
import Privacy from './pages/privacy';
import Contact from './pages/contactus';




 export const UserContext = createContext({})


const App =() => {

  const [userAuth, setUserAuth] = useState({});

  useEffect(() =>{

    let userInSession = lookInSession("user");

    userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token: null})

  }, [])

  return (
    <>
      <UserContext.Provider value={{userAuth, setUserAuth}}>
 
          <Routes>
            <Route  path='/' element={<Navbar/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/aboutus' element={<About/>}/>
              <Route path='/privacy' element={<Privacy/>}/>
              <Route path='/contactus' element={<Contact/>}/>
              <Route path='/verifyUser' element={<Verify/>}/>
              <Route path="/userDashboard" element={<Dashboard/>}/>
              <Route path='/wallet' element={<Wallet/>}/>
              <Route path='/history' element={<History/>}/>
              <Route path='/userProfile' element={<Profile/>}/>
              <Route path='/deposit' element= {<Deposit/>}/>
              <Route path='/withdraw' element ={<Withdraw/>}/>
              <Route path="/buy" element = {<Buy/>}/>
              <Route path="/sell" element = {<Sell/>}/>
              <Route path='/swap' element = {<Swap/>}/>
              <Route path='/card' element = {<Card/>}/>
              <Route path='/bills' element={<Bills/>}/>
              <Route path='/transfer' element={<Transfer/>}/>
              <Route path='signin' element={<UserAuthForm type='sign-in'/>}/>
              <Route path='signup' element={<UserAuthForm type='sign-up'/>}/>
              <Route path='*' element={<PageNotFound/>}/>
            </Route>
           
          </Routes>
     
      </UserContext.Provider> 
    </>
  )
}

export default App
