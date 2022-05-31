import React from 'react'
import Carosal from './components/carosal'
import Image1 from "./assets/hotel4.jpg";
import Image2 from "./assets/hotel1.jpg";
import Image3 from "./assets/hotel7.jpg";
import Image4 from "./assets/hotel3.jpg";
import Image5 from "./assets/hotel1.jpg";
import Navbar from './components/navbar'
import Footer from './components/Footer';





const Home = () => {
  return (
    <>

    <Navbar />
    <Carosal />
 


    <div class="container my-4">
  <div class="row">
    <div class="col-sm">
    <div class="card" style={{width: "18rem"}}>
  <img src={Image1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" style={{width: "18rem"}}>
  <img src={Image2} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" style={{width: "18rem"}}>
  <img src={Image3} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
    </div>
  </div>










  <div class="row">
    <div class="col-sm">
    <div class="card my-4" style={{width: "18rem"}}>
  <img src={Image4} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card my-4" style={{width: "18rem"}}>
  <img src={Image3} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card my-4" style={{width: "18rem"}}>
  <img src={Image1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
    </div>
  </div>
</div>




<br />

<Footer />

</>
  )
}

export default Home