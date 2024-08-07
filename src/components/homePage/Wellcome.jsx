import React from 'react'
import { Link } from 'react-router-dom'

const Wellcome = () => {
  return (
    <div>
        <div className='font-medium h-screen flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-5xl'>Welcome to Food's Kitchen</h1>
            <Link to='/menu' className='px-3 py-2 bg-[#3F51B5] text-white rounded'>GO TO MENU</Link>
        </div>
    </div>
  )
}

export default Wellcome