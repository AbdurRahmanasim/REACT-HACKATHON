import React from 'react'
import Login from './login'
import SignUp from './singup'
import { Routes ,Route } from 'react-router-dom'
import Home from "./home"
import { Profile } from './profile'

 const App = () => {
  return (
    
    <>


<Routes>


<Route path='/' element={<Home/>} />

<Route path='/signup' element={<SignUp/>} />
<Route path='/login' element={<Login/>} />
<Route path='/profile' element={<Profile/>} />




</Routes>




    </>
  )
}
export default App ;



