import React from 'react';
import homeImage1 from '../assets/home_image1.jpg';
import mobile from '../assets/mobile.png';
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






    <div className="flex flex-col md:flex-row items-center justify-between w-full h-[60vh] px-8 py-12 ">
  {/* Left Content */}
  <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#CE1B19]">
      Experience Booking Like Never Before
    </h2>
    <p className="text-lg md:text-xl text-gray-700">
      BookKaro.pk brings you a seamless way to book your favorite events, concerts, and movies — all in one place. Enjoy special discounts, mobile access, and instant confirmations.
    </p>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/2 flex justify-center">
  <img src={mobile} alt="Mobile App" className="w-[450px] md:w-[600px]" />
</div>

</div>
   

    </>
  );
};

export default Home;
