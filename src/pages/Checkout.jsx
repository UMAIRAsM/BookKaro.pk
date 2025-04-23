import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpeg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';
import event6 from '../assets/event6.jpg';
import seatImg from '../assets/seat.png';

const events = {
  1: { src: event1, title: 'Monkey Business', date: 'May 20, 2025', location: 'Lahore Arts Council' },
  2: { src: event2, title: 'Comedy Night', date: 'June 1, 2025', location: 'The Comedy Lounge' },
  3: { src: event3, title: 'Nori', date: 'June 5, 2025', location: 'Alhamra Hall' },
  4: { src: event4, title: 'Wibcon 2025', date: 'June 10, 2025', location: 'Expo Center Lahore' },
  5: { src: event5, title: 'Rafi Peer Carnival', date: 'June 15, 2025', location: 'Peeru’s Café' },
  6: { src: event6, title: 'Photo Fest', date: 'June 20, 2025', location: 'Lok Virsa Gallery' },
};

const generateSeats = () => {
  const rows = 'ABCDEFGHIJ';
  const cols = 10;
  let seats = [];
  for (let r = 0; r < rows.length; r++) {
    for (let c = 1; c <= cols; c++) {
      seats.push(`${rows[r]}${c}`);
    }
  }
  return seats;
};

const bookedSeats = ['B4', 'B5', 'C3', 'D7', 'E5', 'F6']; // sample booked seats

const Checkout = () => {
  const { eventId } = useParams();
  const event = events[eventId];
  const allSeats = generateSeats();

  const [tickets, setTickets] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [showBill, setShowBill] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [qrId, setQrId] = useState('');

  const billRef = useRef(null);

  useEffect(() => {
    setTotalPrice(tickets * 100);
    if (showBill && billRef.current) {
      billRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [tickets, showBill]);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < tickets) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length !== tickets) {
      alert('Select the correct number of seats.');
      return;
    }
    const id = `${eventId}-${Date.now()}`;
    setQrId(id);
    setBookingStatus('Paid');
    setShowBill(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-100 to-yellow-50 py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Event and Form Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-16 mb-10">
          <div className="grid md:grid-cols-2 gap-10">
            <img src={event.src} alt={event.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
            <div>
              <h1 className="text-4xl font-bold text-[#CE1B19] mb-4">{event.title}</h1>
              <p className="text-lg text-gray-600 mb-6">A night of unforgettable fun and excitement!</p>
              <p className="text-sm text-gray-600 mb-2">📅 {event.date}</p>
              <p className="text-sm text-gray-600 mb-6">📍 {event.location}</p>

              <label className="block font-medium mb-1">How many tickets? (Max 10)</label>
              <input
                type="number"
                value={tickets}
                onChange={(e) => {
                  const val = Math.min(10, Math.max(1, parseInt(e.target.value) || 1));
                  setTickets(val);
                }}
                className="w-24 p-2 border rounded mb-4"
              />

              <label className="block font-medium mb-1">Promo Code</label>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />

              <label className="block font-medium mb-1">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              >
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>

              <p className="mb-1">Tickets: {tickets}</p>
              <p className="mb-4">Total Price: ${totalPrice}</p>

             
            </div>
          </div>
        </div>

        {/* Seat Grid */}
        <div className="bg-yellow-50 px-4 py-10 x shadow-md mb-10">
          <div className="w-full max-w-4xl h-24 mb-10 relative mx-auto">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-3/4 h-24 rounded-b-full bg-gray-300 shadow-inner flex items-end justify-center pb-4">
                <p className="text-lg font-semibold text-gray-700">SCREEN</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-5 justify-center text-sm font-medium text-center">
            {allSeats.map((seat) => {
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <div
                  key={seat}
                  onClick={() => handleSeatClick(seat)}
                  className={`relative w-10 h-10 cursor-pointer rounded transition-all
                    ${isBooked ? "opacity-40 cursor-not-allowed bg-gray-500" : "bg-gray-200"}
                    ${isSelected ? "bg-orange-300" : ""}
                  `}
                  title={`Seat ${seat}`}
                >
                  <img src={seatImg} alt={seat} className="w-full h-full object-contain" />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs">{seat}</span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-300 border border-gray-400"></div> Available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-orange-300 border border-orange-400"></div> Selected
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-500 border border-gray-700"></div> Booked
            </div>
          </div>

          {selectedSeats.length > 0 && (
            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold">You selected:</h2>
              <p className="mt-1 text-orange-600">{selectedSeats.join(", ")}</p>
            </div>
          )}
        </div>
        <button
                onClick={handleConfirmBooking}
                className="w-full py-2 bg-[#CE1B19] text-white rounded hover:bg-[#FF6A13]"
              >
                Confirm Booking
              </button>
        {/* Bill Section */}
        {showBill && (
  <div ref={billRef} className="container mx-auto px-6 py-12">
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-300 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#CE1B19] mb-6 uppercase">Booking Receipt</h2>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-700 text-sm">Receipt ID:</p>
          <p className="font-semibold text-sm">{qrId}</p>
        </div>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrId)}&size=100x100`}
          alt="QR Code"
          className="w-24 h-24"
        />
      </div>

      <hr className="mb-4" />

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Event Information</h3>
        <p><strong>Event:</strong> {event.title}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Booking Summary</h3>
        <table className="w-full text-left text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium text-gray-600">Number of Tickets</td>
              <td className="py-2">{tickets}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium text-gray-600">Seats Booked</td>
              <td className="py-2">{selectedSeats.join(", ")}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium text-gray-600">Total Price</td>
              <td className="py-2">${totalPrice}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium text-gray-600">Payment Method</td>
              <td className="py-2">{paymentMethod}</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-gray-600">Booking Status</td>
              <td className="py-2 text-green-600 font-semibold">{bookingStatus}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 text-center">
        Please present this receipt with the QR code at the entrance. Enjoy the event!
      </p>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Checkout;
