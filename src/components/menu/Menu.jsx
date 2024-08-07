import React, { useState } from 'react'
import Product from './product/Product'
import Product2 from './product/Product2'
import Product3 from './product/Product3'
import Product4 from './product/Product4'
import Checkout from './cart/Checkout'


const Menu = () => {
    const [count, setcount] = useState(0)
    const [amount, setamount] = useState(0)
    function add(){
        setcount(count + 1)
    }
    function remove(){
        if(count > 0){
            setcount(count - 1)
            }
       
    }
  return (
    <div>
        <div className='w-screen h-screen flex flex-wrap items-center justify-center gap-5'> 
            <Product />
            <Product2 />
            <Product3 />
            <Product4 /> 
     
        </div>
    </div>
  )
}

export default Menu