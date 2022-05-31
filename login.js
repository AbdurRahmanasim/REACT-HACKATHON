import axios from "axios"
import {useState} from "react"
import Navbar from "./components/navbar"

function Login() {

  
const [email , setemail] = useState("")
const [password , setpassword] = useState("")

   

const loginuphandle = (e) =>{

  e.preventDefault()

const userobj = {
  email,
  password
}




//   console.log(email,password)

  axios.post("http://localhost:8080/login" , userobj)
  .then((res)=>{
    console.log("login succesful")
console.log(res)
 

localStorage.setItem("user", JSON.stringify(res.data));
    setemail("")
    setpassword("")
  })
  .catch((err)=>{
    console.log("invalid user")
  })


}


  return (
 <>
 <Navbar />

 <br />

{/* <h1>Login Up</h1> */}
{/* 
<input type="text" value={email}  onChange={(e)=>{setemail(e.target.value)}}  />
<br />
<input type="text" value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
<br />
<button onClick={loginuphandle} >Login Up</button> */}










<div className="container">
<h1 className="mb-5 text-center">LOG IN FORM</h1>
<form onSubmit={loginuphandle}>


  <div className="form-group">
    <label >EMAIL</label>
    <input type="email" value={email} required onChange={(e)=>{setemail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="form-group">
    <label >PASSWORD</label>
    <input type="password" required  value={password}  onChange={(e)=>{setpassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Log In</button>
</form>
</div>










 </>
  );
}

export default Login;
