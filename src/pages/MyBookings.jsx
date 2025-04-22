import React, { useState } from 'react';
import { CalendarDays, MapPin, Clock, CheckCircle } from 'lucide-react';

const initialBookings = [
  {
    id: 1,
    title: 'Coldplay Concert',
    date: '2025-05-01',
    location: 'Karachi Arena',
    visited: false,
  },
  {
    id: 2,
    title: 'Avengers Movie',
    date: '2025-04-20',
    location: 'Cineplex Lahore',
    visited: false,
  },
  {
    id: 3,
    title: 'Football Match',
    date: '2025-04-10',
    location: 'National Stadium',
    visited: true,
  },
];

const getEventStatus = (date) => {
  const today = new Date();
  const eventDate = new Date(date);
  const diff = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return 'past';
  if (diff === 0) return 'today';
  return 'upcoming';
};

const MyBookings = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [activeTab, setActiveTab] = useState('soon');

  const handleMarkVisited = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, visited: true } : b))
    );
  };

  const filteredBookings = bookings.filter((booking) => {
    const status = getEventStatus(booking.date);
    if (activeTab === 'soon') return status !== 'past';
    if (activeTab === 'missed') return status === 'past' && !booking.visited;
    if (activeTab === 'history') return booking.visited;
    return true;
  });

  return (
    <div className="mt-24 max-w-5xl mx-auto px-4 mb-26">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">🎟 My Bookings</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {['soon', 'missed', 'history'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-4 py-2 rounded-full font-medium border ${
              activeTab === tab
                ? 'bg-orange-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      {filteredBookings.length > 0 ? (
        <div className="space-y-4 ">
          {filteredBookings.map((booking) => {
            const eventStatus = getEventStatus(booking.date);
            return (
              <div
                key={booking.id}
                className=" p-5 rounded-2xl border shadow-sm hover:shadow-md transition "
              >
                <h2 className="text-2xl font-semibold text-gray-800 ">
                  {booking.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-600 mt-2 text-sm">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    {booking.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {booking.location}
                  </span>
                </div>

                {/* Status */}
                <div className="mt-3 flex items-center gap-2 font-medium text-blue-600">
                  <Clock size={16} />
                  {eventStatus === 'today'
                    ? 'Event is Today!'
                    : eventStatus === 'upcoming'
                    ? `⏳ ${Math.ceil(
                        (new Date(booking.date) - new Date()) /
                          (1000 * 60 * 60 * 24)
                      )} day(s) left`
                    : '❌ Event Passed'}
                </div>

                {/* Action Button */}
                {eventStatus !== 'upcoming' && !booking.visited && activeTab !== 'history' && (
                  <button
                    onClick={() => handleMarkVisited(booking.id)}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
                  >
                    <CheckCircle size={16} /> Mark as Visited
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No bookings in this category.</p>
      )}
    </div>
  );
};

export default MyBookings;
