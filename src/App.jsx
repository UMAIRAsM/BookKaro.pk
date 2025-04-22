import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage"; // Handles Login and Signup
import "./index.css";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
