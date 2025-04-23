import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const earnings = 628;
const share = 2434;
const likes = 1259;
const rating = 8.5;
const pieData = [{ name: 'Progress', value: 45 }, { name: 'Remaining', value: 55 }];
const COLORS = ['#FFB347', '#e0e0e0'];

const barData = [
  { month: 'Jan', '2019': 30, '2020': 50 },
  { month: 'Feb', '2019': 20, '2020': 40 },
  { month: 'Mar', '2019': 27, '2020': 39 },
  { month: 'Apr', '2019': 23, '2020': 48 },
  { month: 'May', '2019': 34, '2020': 43 },
  { month: 'Jun', '2019': 40, '2020': 50 },
  { month: 'Jul', '2019': 36, '2020': 42 },
  { month: 'Aug', '2019': 34, '2020': 44 },
  { month: 'Sep', '2019': 38, '2020': 46 },
];

const lineData = [
  { name: 'A', lorem: 40, amet: 24 },
  { name: 'B', lorem: 30, amet: 13 },
  { name: 'C', lorem: 20, amet: 98 },
  { name: 'D', lorem: 27, amet: 39 },
  { name: 'E', lorem: 18, amet: 48 },
  { name: 'F', lorem: 23, amet: 38 },
  { name: 'G', lorem: 34, amet: 43 },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Analytics Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-[#CE1B19] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg">Earning</h2>
          <p className="text-3xl font-bold">${earnings}</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg">Events Booked</h2>
          <p className="text-3xl font-bold">{share}</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg">Locations</h2>
          <p className="text-3xl font-bold">{likes}</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg">Online Rating</h2>
          <p className="text-3xl font-bold">{rating}</p>
        </div>
      </div>

      {/* Result Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Result</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="2019" fill="#CE1B19" />
            <Bar dataKey="2020" fill="#FFB347" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Performance</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="lorem" stroke="#FFB347" />
            <Line type="monotone" dataKey="amet" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Circular Progress Pie */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Progress</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <Link to="/event-management" className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105 ease-in-out">
          <h3 className="text-xl font-semibold">Event Management</h3>
          <p>Manage all your events</p>
        </Link>
        <Link to="/seat-management" className="bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105 ease-in-out">
          <h3 className="text-xl font-semibold">Seat Management</h3>
          <p>Track seat availability and manage bookings</p>
        </Link>
        <Link to="/user-management" className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg hover:bg-yellow-600 transition transform hover:scale-105 ease-in-out">
          <h3 className="text-xl font-semibold">User Management</h3>
          <p>Manage user accounts and roles</p>
        </Link>
        <Link to="/booking-management" className="bg-purple-500 text-white p-6 rounded-lg shadow-lg hover:bg-purple-600 transition transform hover:scale-105 ease-in-out">
          <h3 className="text-xl font-semibold">Booking Management</h3>
          <p>View and manage bookings</p>
        </Link>
        <Link to="/payment-tracking" className="bg-red-500 text-white p-6 rounded-lg shadow-lg hover:bg-red-600 transition transform hover:scale-105 ease-in-out">
          <h3 className="text-xl font-semibold">Payment Tracking</h3>
          <p>Track and manage payment statuses</p>
        </Link>
      </div>
    </div>
  );
};

export default Analytics;