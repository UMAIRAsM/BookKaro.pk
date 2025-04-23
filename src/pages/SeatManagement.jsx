import React, { useState } from 'react';

const seats = [
  { event: 'Music Concert', total: 500, available: 200, booked: 300 },
  { event: 'Tech Conference', total: 300, available: 100, booked: 200 },
  { event: 'Food Festival', total: 200, available: 50, booked: 150 },
];

const SeatManagement = () => {
  const [seatData, setSeatData] = useState(seats);

  const updateSeats = (eventName, availableSeats) => {
    const seatsNum = parseInt(availableSeats, 10);
    setSeatData(seatData.map((seat) =>
      seat.event === eventName
        ? {
            ...seat,
            available: seatsNum,
            booked: seat.total - seatsNum,
          }
        : seat
    ));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#CE1B19] mb-8">Seat Management</h1>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden p-4 sm:p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Seat Availability</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-2">
            <thead>
              <tr className="bg-[#FFA515] text-white">
                <th className="py-3 px-4 text-left text-base sm:text-lg">Event Name</th>
                <th className="py-3 px-4 text-left text-base sm:text-lg">Total Seats</th>
                <th className="py-3 px-4 text-left text-base sm:text-lg">Available</th>
                <th className="py-3 px-4 text-left text-base sm:text-lg">Booked</th>
                <th className="py-3 px-4 text-left text-base sm:text-lg">Update</th>
              </tr>
            </thead>
            <tbody>
              {seatData.map((seat) => (
                <tr key={seat.event} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{seat.event}</td>
                  <td className="py-3 px-4 text-gray-800">{seat.total}</td>
                  <td className="py-3 px-4 text-gray-800">{seat.available}</td>
                  <td className="py-3 px-4 text-gray-800">{seat.booked}</td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      value={seat.available}
                      onChange={(e) => updateSeats(seat.event, e.target.value)}
                      className="w-full sm:w-24 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                      max={seat.total}
                    />
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

export default SeatManagement;
