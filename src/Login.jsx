import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  return (
    <div className="bg-neutral-00 min-h-screen bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 w-full max-w-md ">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Signin</h1>
          <p className="text-gray-600">Login to your account</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-600 hover:bg-neutral-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-6"
          >
            Signin
          </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            Have'nt registered yet?{" "}
            <Link
              to="/Register"
              className="text-neutral-600 hover:text-blue-500 underline"
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
