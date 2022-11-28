import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='bg-primary'>
        <div className='p-4 grid grid-cols-3 text-center container m-auto text-white text-xl'>
            <div>
            <h1 className='text-3xl'>My Game Shop</h1>
            <h3 className='text-lg'>Come and get your keys!</h3>
            </div>
            <input className='rounded-full p-2  pl-6 text-black text-md w-96 h-max m-auto ' type={"text"}></input>

        </div>
    </div>
  )
}
