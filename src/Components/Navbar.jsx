import React from 'react'
import noodles from "../assets/noodles.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  let handleClick = () => {
    navigate("/");
  }

  return (
    <div >
        <div className='bg-white w-full fixed top-0 flex justify-between px-8 items-center'>
            <h1 onClick={handleClick} className='text-4xl font-semibold p-4 text-green-700 cursor-pointer'>
                F<span className='text-red-500'>oo</span>d W<span className='text-red-500'>o</span>rld</h1>
           
             <img  className='h-20 ' 
            src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=626&ext=jpg&uid=R109850205&ga=GA1.1.1895320206.1709354466&semt=ais" />
        </div>
    </div>
  )
}

export default Navbar


