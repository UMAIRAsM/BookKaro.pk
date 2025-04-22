import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpeg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';
import event6 from '../assets/event6.jpg';

const events = {
  1: {
    src: event1,
    title: 'Monkey Business',
    date: 'May 20, 2025',
    location: 'Lahore Arts Council',
  },
  2: {
    src: event2,
    title: 'Comedy Night',
    date: 'June 1, 2025',
    location: 'The Comedy Lounge',
  },
  3: {
    src: event3,
    title: 'Nori',
    date: 'June 5, 2025',
    location: 'Alhamra Hall',
  },
  4: {
    src: event4,
    title: 'Wibcon 2025',
    date: 'June 10, 2025',
    location: 'Expo Center Lahore',
  },
  5: {
    src: event5,
    title: 'Rafi Peer Carnival',
    date: 'June 15, 2025',
    location: 'Peeru’s Café',
  },
  6: {
    src: event6,
    title: 'Photo Fest',
    date: 'June 20, 2025',
    location: 'Lok Virsa Gallery',
  },
};

const Book = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = events[eventId];

  const [tickets, setTickets] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [wishlistAdded, setWishlistAdded] = useState(false);

  const handleTicketsChange = (e) => {
    setTickets(e.target.value);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleAddToWishlist = () => {
    setWishlistAdded(true);
  };

  const handleConfirmBooking = () => {
    // Navigate to the checkout page with the current eventId
    navigate(`/checkout/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-100 to-yellow-50 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-xl p-8 md:p-16">
          
          {/* Event Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={event.src}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Event Details and Booking Form */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold text-[#CE1B19] mb-4">{event.title}</h1>
            <p className="text-lg text-gray-600 mb-6">
              A night of unforgettable fun and excitement!
            </p>
            <div className="text-gray-700 mb-6">
              <p className="text-sm mb-2">📅 {event.date}</p>
              <p className="text-sm mb-2">📍 {event.location}</p>
            </div>

           

           

            {/* Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleConfirmBooking}
                className="w-full py-2 text-white bg-[#CE1B19] hover:bg-[#FF6A13] rounded-lg shadow-md transition-all duration-300"
              >
                Confirm Booking
              </button>
              <button
                onClick={handleAddToWishlist}
                className="w-full py-2 text-[#CE1B19] bg-transparent border-2 border-[#CE1B19] hover:bg-[#CE1B19] hover:text-white rounded-lg shadow-md transition-all duration-300"
              >
                {wishlistAdded ? 'Added to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
