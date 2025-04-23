import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage"; // Handles Login and Signup
import "./index.css";
import Footer from './components/Footer';
import Event from './pages/EventPage'; 
import Checkout from './pages/Checkout';
import Book from './pages/Book';
import PromoCode from './pages/PromoCode'; 
import Wishlist from './pages/Wishlist'; 
import Bookings from './pages/MyBookings';
import Verify from './pages/Verify';
import Analytics from './pages/Analytics';
import EventManagement from './pages/EventManagement';
import SeatManagement from './pages/SeatManagement';
import UserManagement from './pages/UserManagement';
import BookingManagement from './pages/BookingManagement';
import PaymentTracking from './pages/PaymentManagement';


function App() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Router>
      <Navbar setIsSignup={setIsSignup} />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth"
            element={<AuthPage isSignup={isSignup} setIsSignup={setIsSignup} />}
          />
          <Route path="/events" element={<Event />} />
          <Route path="/book/:eventId" element={<Book />} />
          <Route path="/checkout/:eventId" element={<Checkout />} />
          <Route path="/promos" element={<PromoCode />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/seat-management" element={<SeatManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/booking-management" element={<BookingManagement />} />
          <Route path="/payment-tracking" element={<PaymentTracking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
