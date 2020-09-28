import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home_image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxCINJEPEEtbR2TfhO1hau9vjac1ShcPStHA&usqp=CAU'
          alt=''
        />
        <div className='home_row'>
          <Product />
          <Product />
        </div>
        <div className='home_row'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='home_row'>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
