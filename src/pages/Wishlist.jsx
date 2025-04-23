import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: 'Monkey Business',
      date: 'May 20, 2025',
      location: 'Lahore Arts Council',
    },
    {
      id: 2,
      title: 'Comedy Night',
      date: 'June 1, 2025',
      location: 'The Comedy Lounge',
    },
    {
      id: 3,
      title: 'Nori',
      date: 'June 5, 2025',
      location: 'Alhamra Hall',
    },
  ]);

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter((event) => event.id !== id));
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-[#CE1B19] mb-4 text-center sm:text-left">
        My Wishlist
      </h1>

      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((event) => (
            <li
              key={event.id}
              className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <div className="mb-4 sm:mb-0">
                <h2 className="text-xl font-semibold text-[#CE1B19]">{event.title}</h2>
                <p className="text-gray-700">{event.date}</p>
                <p className="text-gray-700">{event.location}</p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to={`/book/${event.id}`}
                  className="py-2 px-6 text-white bg-[#CE1B19] hover:bg-[#FF6A13] rounded-lg"
                >
                  Book Now
                </Link>
                <button
                  onClick={() => handleRemoveFromWishlist(event.id)}
                  className="py-2 px-6 text-white bg-red-600 hover:bg-red-700 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-600 text-center sm:text-left">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
