import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import LoginComponent from './Routes/Login'
import SignUpComponent from './Routes/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="w-screen h-screen">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<DomElement/>}></Route>
        <Route path="/login" element={<LoginComponent/>}></Route>
        <Route path="/signup" element={<SignUpComponent/>}></Route>
       </Routes>
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
