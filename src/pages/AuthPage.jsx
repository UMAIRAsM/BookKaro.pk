import React from "react";
import LoginForm from "../components/LoginForm";  // Adjusted path
import SignupForm from "../components/SignupForm";  // Adjusted path

const AuthPage = ({ isSignup, setIsSignup }) => {
  return (
    <div className="flex justify-center items-center mt-18">
      <div className="w-96 h-96 bg-[#FFA515] rounded-lg shadow-lg p-6">
        {isSignup ? (
          <SignupForm onLoginClick={() => setIsSignup(false)} />
        ) : (
          <LoginForm onSignupClick={() => setIsSignup(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
