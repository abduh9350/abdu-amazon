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
          <Product
            id='0000001'
            title='mini Phone Tripod Holder Flexible Sponge Legs Non Slip Octopus Bracket with Universal Clip for Mobile phone Camera'
            price={29.99}
            image='https://sc01.alicdn.com/kf/H5ef45b9d057b4afb89702a4fd827ff59b.jpg'
            rating={4}
          />
          <Product
            id='0000002'
            title='New design high quality running backpack bicycle bag with water pouch'
            price={19.99}
            image='https://sc02.alicdn.com/kf/HTB1RIWlaGmgSKJjSspi760yJFXaQ.png'
            rating={3}
          />
        </div>
        <div className='home_row'>
          <Product
            id='0000003'
            title='Travelcool Wholesale S33 BT Wireless Stereo Noise Isolating Headset with Mic'
            price={14.99}
            image='https://sc02.alicdn.com/kf/H5ca7599a6c2a4a1f816a06da8a5d216eZ.jpg'
            rating={5}
          />
          <Product
            id='0000004'
            title='Mini Dog GPS Tracking animal waterproof ip66 dog tracking device small gps pet tracker'
            price={9.99}
            image='https://sc01.alicdn.com/kf/Haec11d3c4ac1477bb3fb58899a31ee54C.jpg'
            rating={1}
          />
          <Product
            id='0000005'
            title='Fashion High waist sport clothes wholesale activewear peach buttocks women yoga wear running gym leggings'
            price={44.99}
            image='https://sc01.alicdn.com/kf/Had349b2a4ded4e4db9ee1180f9a0f246v.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            id='0000006'
            title='B-7000 Glue 100ml Industrial Super Strong For Jewelry Mobile Phone Shell Rhinestones Adhesive Glue'
            price={1.99}
            image='https://sc02.alicdn.com/kf/Ha5498ef52c60412e9e789bb9eeef5484B.png'
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
