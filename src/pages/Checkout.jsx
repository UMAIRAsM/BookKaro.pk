import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const Checkout = () => {
  const { eventId } = useParams();
  const event = events[eventId];

  const [tickets, setTickets] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(100); // Default price per ticket
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [showBill, setShowBill] = useState(false); // Flag to toggle the bill view

  const billRef = useRef(null); // Create a ref for the bill section

  useEffect(() => {
    if (showBill && billRef.current) {
      // Scroll to the bill section when it's shown
      billRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showBill]);

  const handleTicketsChange = (e) => {
    setTickets(e.target.value);
    setTotalPrice(e.target.value * 100); // Assuming each ticket costs 100
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleAddToWishlist = () => {
    setWishlistAdded(true);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleConfirmBooking = () => {
    setShowBill(true); // Display the bill when the booking is confirmed
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-100 to-yellow-50 py-10">
      {/* Event Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-xl p-8 md:p-16">
          {/* Left: Event Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={event.src}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Event Details and Checkout Form */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold text-[#CE1B19] mb-4">{event.title}</h1>
            <p className="text-lg text-gray-600 mb-6">
              A night of unforgettable fun and excitement!
            </p>
            <div className="text-gray-700 mb-6">
              <p className="text-sm mb-2">📅 {event.date}</p>
              <p className="text-sm mb-2">📍 {event.location}</p>
            </div>

            {/* Tickets Section */}
            <div className="flex items-center mb-6">
              <label className="text-lg text-gray-700 font-medium mr-4" htmlFor="tickets">
                How many tickets?
              </label>
              <input
                type="number"
                id="tickets"
                value={tickets}
                onChange={handleTicketsChange}
                min="1"
                className="w-20 p-2 border border-gray-300 rounded-lg text-center"
              />
            </div>

            {/* Promo Code Section */}
            <div className="flex items-center mb-6">
              <label className="text-lg text-gray-700 font-medium mr-4" htmlFor="promoCode">
                Have a Promo Code?
              </label>
              <input
                type="text"
                id="promoCode"
                value={promoCode}
                onChange={handlePromoCodeChange}
                className="w-64 p-2 border border-gray-300 rounded-lg"
                placeholder="Enter promo code"
              />
            </div>

            {/* Payment Section */}
            <div className="flex flex-col mb-6">
              <label className="text-lg text-gray-700 font-medium mb-2">Select Payment Method</label>
              <select
                value={paymentMethod}
                onChange={handlePaymentChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-bold text-gray-700 mb-2">Order Summary</h2>
              <p className="text-gray-600 mb-2">Tickets: {tickets}</p>
              <p className="text-gray-600 mb-2">Total Price: ${totalPrice}</p>
            </div>

            {/* Action Buttons */}
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

      {/* Bill */}
      {showBill && (
        <div ref={billRef} className="container mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-300">
            <h1 className="text-3xl font-bold text-center text-[#CE1B19] mb-8">Ticket Booking Bill </h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-gray-700 font-medium">Event:</span>
                <span className="text-gray-600">{event.title}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-700 font-medium">Date:</span>
                <span className="text-gray-600">{event.date}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-gray-700 font-medium">Location:</span>
                <span className="text-gray-600">{event.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-700 font-medium">Tickets:</span>
                <span className="text-gray-600">{tickets}</span>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-700 font-medium">Total Price:</span>
              <span className="text-gray-600">${totalPrice}</span>
            </div>
            <div className="border-t border-gray-300 pt-4 mt-6">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Payment Method:</span>
                <span className="text-gray-600">{paymentMethod}</span>
              </div>
              <div className="flex justify-end">
                <span className="text-gray-600">(Show this at the entrance of the venue)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
