import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Navbar from "./components/navbar"

function SignUp() {
  



  const navigate = useNavigate()

const [userName , setuserName] = useState("")
const [contact , setcontact] = useState("")
const [email , setemail] = useState("")
const [password , setpassword] = useState("")

const singuphandle = (e) =>{
  e.preventDefault()

const userobj = {
  userName,
  contact,
  email,
  password
}


  console.log(email,password)

  axios.post("http://localhost:8080/signup" , userobj)
  .then((res)=>{
    console.log(res.data)
    navigate("/login")
  })
  .catch((err)=>{
    console.log(err)
  })



}


  return (
 <>


 <Navbar />
<br />





{/* <input type="text" value={userName}  onChange={(e)=>{setuserName(e.target.value)}}  />
<br />
<input type="text" value={contact}  onChange={(e)=>{setcontact(e.target.value)}}  />
<br />
<input type="text" value={email}  onChange={(e)=>{setemail(e.target.value)}}  />
<br />
<input type="text" value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
<br />
<button onClick={singuphandle} >Sign Up</button> */}





<div className="container">
<h1 className="mb-5 text-center">SIGN UP FORM</h1>
<form onSubmit={singuphandle}>
<div className="form-group">
    <label >USER NAME</label>
    <input type="text" required
    alue={userName}  onChange={(e)=>{setuserName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="form-group">
    <label >CONTACT</label>
    <input type="text" value={contact} required onChange={(e)=>{setcontact(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
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
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
</div>
















 </>
  );
}

export default SignUp;
