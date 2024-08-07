import React, { useState } from 'react'

const Product2 = () => {

    const [count, setcount] = useState(0)
    const [amount, setamount] = useState(0)
    function add(){
        setcount(count + 1)
    }
    function remove(){
        //if count id 0 then not decrese
        if(count > 0){
            setcount(count - 1)
            }
       
    }

  return (
    <div>
        <div className='w-60 border-b border-gray-700 shadow-md rounded overflow-hidden flex flex-col gap-2'>
                <img className='h-32 w-full object-cover' src="src\assets\coke.jpeg" alt="" />
                <h1 className='text-xl mt-5 px-2'>Hamburger</h1>
                <p className='text-xs px-2'>Price: 200</p>
                <p className='text-xs px-2'>Total: {count} </p>
                <p className='text-xs px-2'>Cost(INR): {amount+count*200} </p>

                <div className='flex gap-5 px-2 py-2 text-white text-xl'>
                    <button onClick={add} className='w-12 rounded  bg-[#3F51B5] '>+</button>
                    <button onClick={remove} className='w-12 rounded  bg-[#e73434] '>-</button>
                </div>
            </div>
    </div>
  )
}

export default Product2