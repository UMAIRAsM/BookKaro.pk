import React, { useState } from 'react';

const bookings = [
  { id: 1, user: 'umair', event: 'Music Concert', date: '2025-05-12', seats: 2 },
  { id: 2, user: 'umair aslam', event: 'Tech Conference', date: '2025-06-20', seats: 3 },
];

const BookingManagement = () => {
  const [bookingList, setBookingList] = useState(bookings);

  const cancelBooking = (id) => {
    setBookingList(bookingList.filter((booking) => booking.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 mb-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#CE1B19] text-center sm:text-left">
        Booking Management
      </h1>

      <div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg">
        <h2 className="text-lg sm:text-xl font-medium mb-4">Booking List</h2>

        {/* Scrollable container */}
        <div className="overflow-x-auto w-full">
          <table className="table-auto text-sm sm:text-base w-full">
            <thead>
              <tr className="bg-[#FFA515] text-white">
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Event</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Seats</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingList.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="py-2 px-4">{booking.user}</td>
                  <td className="py-2 px-4">{booking.event}</td>
                  <td className="py-2 px-4">{booking.date}</td>
                  <td className="py-2 px-4">{booking.seats}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;
