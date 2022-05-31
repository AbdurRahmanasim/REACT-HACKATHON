import React from 'react'
import Navbar from './components/navbar'
import user from "./assets/user.jpg"



export const Profile = () => {

const getData = JSON.parse(localStorage.getItem("user"))






  return (
   <>


<Navbar/>




<div className="card my-5 container" style={{width: "18rem"}}>
  <img src={user} className="card-img-top" alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">Name : {getData.userName}</h5>
    <h5 className="card-title">Email : {getData.email}</h5>
    <h5 className="card-title">Contact : {getData.contact}</h5>


    
    
    <button  className="btn btn-success">Edit profile</button>
  </div>
</div>













</>
  )
}
