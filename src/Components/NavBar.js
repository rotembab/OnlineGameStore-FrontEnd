import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='bg-primary sticky'>
        <div className='p-4 grid grid-cols-3 text-center container m-auto text-white text-xl'>
            <div>
            <h1 className='text-3xl'>My Game Shop</h1>
            <h3 className='text-lg'>Come and get your keys!</h3>
            </div>
            <div className='w-96 h-max m-auto relative'>
              <input on className='rounded-full p-2  w-full pl-12 text-black text-md ' type={"text"}></input>
              <img className='absolute top-2 left-2 h-8 w-8 m-auto' src={require("../Images/search.png")}/> 
            </div>
            
        </div>
    </div>
  )
}
