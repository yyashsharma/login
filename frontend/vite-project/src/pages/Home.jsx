import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Home = () => {

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/v1/users/logout`,{},
        {
          withCredentials: true,
        }
      )
      toast.success(data.message)
      // navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div>
      Home
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  )
}

export default Home
