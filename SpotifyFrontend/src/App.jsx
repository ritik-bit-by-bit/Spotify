import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import LoginComponent from './Routes/Login'
import SignUpComponent from './Routes/SignUp'
import Home from './Routes/Home'
import { useCookies } from 'react-cookie'
import Loggedin from './Routes/Loggedin'
function App() {
  const [cookie, setCookie] = useCookies(['token']);

  return (
      <div className="w-screen h-screen">
       <BrowserRouter>
       {
        cookie.token ?  (<Routes>
        <Route path="/home" element={<Loggedin/>}></Route>
        <Route path="*" element={<Loggedin/>}></Route>
       </Routes>):(      
        <Routes>
        <Route path="/login" element={<LoginComponent/>}></Route>
        <Route path="/signup" element={<SignUpComponent/>}></Route>
        <Route path="*" element={<Home/>}></Route>
       </Routes>)
       }
       </BrowserRouter>
      </div>
  )
}
function DomElement(){
  return (
    <div>
      <div>hey yo </div>
      <div>baby</div>
      </div>
  )
}
export default App;
