import React from 'react';
import homeImage1 from '../assets/home_image1.jpg';
import Slideshow from "../components/Slideshow";


const Home = () => {
  return (
    <>
<div
  className="top-16 fixed left-0 w-full h-10 shadow-md overflow-hidden z-20 ml-0 pl-0 "
  style={{
    background: 'linear-gradient(to bottom, #f44 0%, #CE1B19 70%, #800000 100%)'
  }}
>
  <div className="marquee-track mt-1 text-white">
    <div className="marquee-content">
      🎉 Don’t miss out on the biggest concerts of the year — book now!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      🎬 Movies with exclusive discounts on blockbusters! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      🏀 Sports events are back — reserve your spot today! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      🎭 Live theatre near you — book early to avoid disappointment! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div className="marquee-content" aria-hidden="true">
      🎉 Don’t miss out on the biggest concerts of the year — book now! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      🎬 Movies with exclusive discounts on blockbusters! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      🏀 Sports events are back — reserve your spot today! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      🎭 Live theatre near you — book early to avoid disappointment! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</div>

<div className="w-full h-auto mx-0 px-0">
        
<Slideshow />
    </div>

<img src={homeImage1} alt="Home Image" className="w-full h-auto" />





    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to BookKaroPK</h1>
      <p className="text-gray-700">Discover and book your favorite events with ease.</p>

    </div>
   

    </>
  );
};

export default Home;
