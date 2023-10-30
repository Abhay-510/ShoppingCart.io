
import {FcDeleteDatabase, FcRemoveImage} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div >

        <div className="h-[180px] w-[200px] mt-10 mb-10">
          <img className="h-full" src={item.image} />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg  w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[12px] text-left">{item.description.split(" ").slice(0,20).join(" ") + "....."}more</h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div className="font-lg"
            onClick={removeFromCart}>
              <FcDeleteDatabase size={30}/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
