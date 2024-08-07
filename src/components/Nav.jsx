import React from 'react'
import Checkout from './menu/cart/Checkout'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div className='h-20 text-white bg-[#3F51B5] flex items-center justify-between font-semibold'>
          <div className='flex gap-3 items-center px-5 text-white'>
            <img src="src\assets\restaurant_24px.svg" alt="" />
            <h1 className='text-2xl'>Food's Rstaurant</h1>
          </div>
          <div className='flex items-center justify-center gap-1 px-5'>
          <button></button>
          <Link to="/checkout"><img className='w-7 mr-2' src="src\assets\cart.png" alt="" /></Link>
          <span>0</span>
          </div>
        </div>
    </div>
  )
}

export default Nav