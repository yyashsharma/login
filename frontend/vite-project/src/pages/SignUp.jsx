import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cat, setCat] = useState("");
  const [mob, setMob] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        {
          name,
          email,
          password,
          cat,
          mob,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className={`min-h-screen bg-blue-500 bg-cover bg-center flex justify-center items-center`}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-slate mb-6">
          Create an account
        </h2>
        <form className="space-y-4 text-slate" onSubmit={submitHandler}>
          <div>
            <label htmlFor="username" className=" block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full rounded-md bg-white bg-opacity-30 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2"
              placeholder="Enter your username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md bg-white bg-opacity-30 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className=" block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md bg-white bg-opacity-30 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />


          </div>
          <div>
          <label htmlFor="cat" className=" block mb-1">
              Highest Education Level
            </label>
          <select id="cat"  onChange={(e) => setCat(e.target.value)} class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>11</option>
              <option>12</option>
              <option>13</option>
            </select>
          </div>
          <div>
          <label htmlFor="password" className=" block mb-1">
              Mobile No.
            </label>
            <input
              type="number"
              id="mob"
              className="w-full rounded-md bg-white bg-opacity-30 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2"
              placeholder="Enter your number"
              onChange={(e) => setMob(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-black text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-white-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
