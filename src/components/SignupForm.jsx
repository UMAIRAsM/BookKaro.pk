import React from "react";

const SignupForm = ({ onLoginClick }) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg">
      <h2 className="text-center text-3xl text-gray-700 font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        className="w-full mb-4 p-2 border-2 border-gray-300 rounded"
        placeholder="Username"
      />
      <input
        type="password"
        className="w-full mb-4 p-2 border-2 border-gray-300 rounded"
        placeholder="Password"
      />
      <input
        type="password"
        className="w-full mb-4 p-2 border-2 border-gray-300 rounded"
        placeholder="Confirm Password"
      />
      <button className="bg-[#CE1B19] text-white px-4 py-2 rounded w-full">
        Sign Up
      </button>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={onLoginClick}
            className="text-[#FFA515] cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
