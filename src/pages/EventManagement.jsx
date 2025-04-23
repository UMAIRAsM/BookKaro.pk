import React, { useState } from 'react';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpeg';

const events = [
  { id: 1, name: 'Music Concert', date: '2025-05-12', seats: 500, price: 50, image: event1 },
  { id: 2, name: 'Tech Conference', date: '2025-06-20', seats: 300, price: 100, image: event2 },
  { id: 3, name: 'Food Festival', date: '2025-07-15', seats: 200, price: 30, image: event3 },
];

const EventManagement = () => {
  const [eventList, setEventList] = useState(events);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    seats: '',
    price: '',
    image: null,
  });
  const [showForm, setShowForm] = useState(false);

  const deleteEvent = (id) => {
    setEventList(eventList.filter((event) => event.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setNewEvent({
      ...newEvent,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEventId = eventList.length + 1;
    const addedEvent = {
      ...newEvent,
      id: newEventId,
    };
    setEventList([...eventList, addedEvent]);
    setShowForm(false);
    setNewEvent({ name: '', date: '', seats: '', price: '', image: null });
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#CE1B19] mb-6">Event Management</h1>

      <div className="bg-white shadow-xl p-4 sm:p-8 rounded-xl overflow-hidden">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 sm:px-6 text-left text-base sm:text-lg text-gray-700">Event Name</th>
                <th className="py-3 px-4 sm:px-6 text-left text-base sm:text-lg text-gray-700">Date</th>
                <th className="py-3 px-4 sm:px-6 text-left text-base sm:text-lg text-gray-700">Seats</th>
                <th className="py-3 px-4 sm:px-6 text-left text-base sm:text-lg text-gray-700">Price</th>
                <th className="py-3 px-4 sm:px-6 text-left text-base sm:text-lg text-gray-700">Image</th>
                <th className="py-3 px-4 sm:px-6 text-left text-base sm:text-lg text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventList.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 sm:px-6 text-gray-700">{event.name}</td>
                  <td className="py-3 px-4 sm:px-6 text-gray-700">{event.date}</td>
                  <td className="py-3 px-4 sm:px-6 text-gray-700">{event.seats}</td>
                  <td className="py-3 px-4 sm:px-6 text-gray-700">${event.price}</td>
                  <td className="py-3 px-4 sm:px-6">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                      />
                    )}
                  </td>
                  <td className="py-3 px-4 sm:px-6">
                    <button
                      className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                      onClick={() => deleteEvent(event.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full sm:w-auto text-white px-6 py-3 rounded-xl bg-[#FFA515] hover:bg-[#CE1B19] transition-all duration-300"
        >
          {showForm ? 'Cancel' : 'Add New Event'}
        </button>
      </div>

      {showForm && (
        <div className="mt-8 bg-white shadow-xl p-6 sm:p-8 rounded-xl max-w-xl w-full mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add New Event</h3>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Event Name</label>
              <input
                type="text"
                name="name"
                value={newEvent.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Event Date</label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Seats</label>
              <input
                type="number"
                name="seats"
                value={newEvent.seats}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={newEvent.price}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Event Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {newEvent.image && (
                <div className="mt-4">
                  <img
                    src={newEvent.image}
                    alt="Preview"
                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto text-white px-6 py-3 rounded-xl bg-[#FFA515] hover:bg-[#CE1B19] transition-all duration-300"
            >
              Add Event
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
