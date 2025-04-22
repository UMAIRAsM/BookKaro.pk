import React from 'react';
import homeImage1 from '../assets/home_image1.jpg';
import mobile from '../assets/mobile.png';
import Slideshow from "../components/Slideshow";
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpeg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';
import event6 from '../assets/event6.jpg';

const events = [
  { src: event1, title: 'Monkey Business' },
  { src: event2, title: 'Comedy Night' },
  { src: event3, title: 'Nori' },
  { src: event4, title: 'Wibcon 2025' },
  { src: event5, title: 'Rafi Peer Carnival' },
  { src: event6, title: 'Photo Fest' },
];

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

      <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto px-8 py-12">
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

      {/* Event Section */}
      <div className="w-full px-8 py-12 bg-gray-100">
        <h2 className="text-5xl font-bold text-center text-[#CE1B19] mb-12">Upcoming Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <img
                src={event.src}
                alt={event.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
