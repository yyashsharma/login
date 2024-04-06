import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const navigate=useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/api/v1/users/login",
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                })
          
                toast.success(data.message)
            navigate("/");

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
  return (
    <div>
         <div className={`min-h-screen bg-blue-500 bg-cover bg-center flex justify-center items-center`}>
            <div className="bg-white  shadow-lg rounded-lg p-8 max-w-md w-full ">
                <h2 className="text-3xl font-bold text-slate mb-6">Login</h2>
                <form className="space-y-4 " onSubmit={submitHandler}>
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Login
                    </button>
                </form>
                <p className="text-black text-center mt-4">Don't have an account? <Link to="/signup" className="text-white-300 hover:underline">Sign up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login
