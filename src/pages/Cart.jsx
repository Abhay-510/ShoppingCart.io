import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="">
  {
    cart.length > 0  ? 
    (<div className="flex justify-evenly">


      <div className="max-w-2xl p-2  h-[5px]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="mt-10 border-4 border-grey shadow-lg p-4">
        <div className="mt-5 mb-5 ml-5 mr-5">

        <div className="text-gray-700 font-semibold text-lg  w-40 mt-1">
          <div className="text-gray-700 font-semibold text-lg  w-40 mt-1">Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div >
          <p className="text-green-600 font-semibold">Total Amount: ${totalAmount}</p>
          <button className="px-4 py-2 mt-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
            CheckOut Now
          </button>
        </div>

      </div>
      </div>


    </div>) : 
    (<div className=" flex flex-col items-center justify-center">
      <h1 className="text-gray-700 font-semibold text-lg  w-40 mt-4 ml-8">!!Cart Empty!!</h1>
      <Link to={"/"}>
        <button className="bg-blue-500 mt-20 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-transform transform hover:scale-105 shadow-md">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
