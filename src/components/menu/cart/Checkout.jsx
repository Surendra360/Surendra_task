import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {

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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="p-3 w-[40vw] border border-gray-700 rounded">
          <h1 className="text-xl py-2">Order Summary</h1>
          <div className="flex items-center justify-between">
            <h1>Coke :</h1>
            <p>{count}</p>
            <div className="flex gap-5 px-2 py-2 text-white text-xl">
              <button onClick={add} className="w-12 rounded  bg-[#3F51B5] ">
                +
              </button>
              <button onClick={remove} className="w-12 rounded  bg-[#e73434] ">
                -
              </button>
            </div>
          </div>
          <p>Total(INR): {amount+count*200} </p>
          <div className="text-sm font-semibold mt-4 flex items-center justify-end gap-5">
            <Link to="/done"><button className="px-2 py-1 bg-[#3F51B5] rounded text-white">SAVE AND CHECKOUT</button></Link>
            <Link to="/menu"><button>CANCEL</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
