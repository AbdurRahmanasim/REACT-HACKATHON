import React from 'react'
import hotel4 from "../assets/hoterl8.jpg"
import hotel2 from "../assets/hotel6.jpg"
import hotel3 from "../assets/hotel7.jpg"

const Carosal = () => {
  return (
    <>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hotel4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={hotel2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={hotel3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>





    </>
  )
}

export default Carosal
