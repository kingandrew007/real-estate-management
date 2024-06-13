import React from 'react'
import About from './About';
import './Carosel.css';
// import { Link } from 'react-router-dom';
function Carosel() {
  return (
    <>
      
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">  
      <img src="https://wallpaper.forfun.com/fetch/06/06e40a0a673edfcb9aaa5194cfb684a3.jpeg" className="d-block w-100 carosal-height" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/beautiful-house-tree-against-cloudy-blue-sky-background-54044451.jpg" className="img-fluid d-block w-100 carosal-height" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/01/18/46/52/360_F_118465200_0q7Of6UnbA8kDlYEe3a4PuIyue27fbuV.jpg" className="d-block w-100 carosal-height" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div>
  <About/>
</div>

    </>
  )
}

export default Carosel;
