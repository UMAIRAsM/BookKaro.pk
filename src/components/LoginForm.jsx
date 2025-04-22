import React from "react";

const LoginForm = ({ onSignupClick }) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg ">
      <h2 className="text-center text-3xl text-gray-700 font-bold mb-4">Login</h2>
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
      <div className="flex justify-between items-center">
        <button className="bg-[#CE1B19] text-white px-4 py-2 rounded">Login</button>
        <a href="#" className="text-sm text-[#CE1B19] hover:underline">
          Forgot Password?
        </a>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            onClick={onSignupClick}
            className="text-[#FFA515] cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
