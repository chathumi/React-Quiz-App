import React from 'react'
import BannerImage from "../assets/2.jpg";
import './Home.css'

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
    <div className="headerContainer">
      <h1> Quiz </h1>
     
    </div>
  </div>
  )
}

export default Home