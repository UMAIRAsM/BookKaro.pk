import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpeg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';
import event6 from '../assets/event6.jpg';

const categories = [
  { id: 'concerts', label: '🎤 Concerts' },
  { id: 'movies', label: '🎬 Movies' },
  { id: 'sports', label: '🏀 Sports' },
  { id: 'theatre', label: '🎭 Theatre' },
];

const sampleEvents = [
  {
    src: event1,
    title: 'Monkey Business',
    date: 'May 20, 2025',
    location: 'Lahore Arts Council',
    id: 1
  },
  {
    src: event2,
    title: 'Comedy Night',
    date: 'June 1, 2025',
    location: 'The Comedy Lounge',
    id: 2
  },
  {
    src: event3,
    title: 'Nori',
    date: 'June 5, 2025',
    location: 'Alhamra Hall',
    id: 3
  },
  {
    src: event4,
    title: 'Wibcon 2025',
    date: 'June 10, 2025',
    location: 'Expo Center Lahore',
    id: 4
  },
  {
    src: event5,
    title: 'Rafi Peer Carnival',
    date: 'June 15, 2025',
    location: 'Peeru’s Café',
    id: 5
  },
  {
    src: event6,
    title: 'Photo Fest',
    date: 'June 20, 2025',
    location: 'Lok Virsa Gallery',
    id: 6
  },
];

const EventPage = () => {
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleBookNowClick = (eventId) => {
    navigate(`/book/${eventId}`); // Navigate to the Book page with the event ID
  };

  return (
    <div className="w-full px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#CE1B19] mb-16">
        Upcoming Events
      </h1>

      {categories.map((category, idx) => (
        <section key={idx} className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2
              id={category.id}
              className="text-3xl font-semibold text-[#CE1B19] tracking-tight"
            >
              {category.label}
            </h2>
            <span className="text-sm text-gray-500">See all</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleEvents.map((event, i) => (
              <div
                key={i}
                className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 group"
              >
                <div className="relative">
                  <img
                    src={event.src}
                    alt={event.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {category.label.split(' ')[1]}
                  </div>
                  {/* Overlay with text and button */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white mb-4">
                      📅 {event.date} | 📍 {event.location}
                    </p>
                    <button
                      onClick={() => handleBookNowClick(event.id)} // Add onClick handler
                      className="px-6 py-2 text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    📅 {event.date}
                  </p>
                  <p className="text-sm text-gray-500">📍 {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default EventPage;
