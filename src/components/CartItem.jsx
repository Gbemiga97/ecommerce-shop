import { Link } from "react-router-dom"
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"
import { useCartContext } from "../contexts"


const CartItem = ({item, handleClose}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useCartContext()
  const {id, title, image, price, amount} = item

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">

        <Link
        to={`product/${id}`}
        onClick={handleClose}
        >
          <img 
          className="max-w-[80px]"
          src={image} 
          alt={title} />
        </Link>
        <div className="w-full flex flex-col">

          <div className="flex justify-between mb-2">
            <Link
            to={`product/${id}`}
             onClick={handleClose}
            className="uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
            {title}
            </Link>

            <button
            onClick={() => removeFromCart(id)}
             className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition " />
            </button>
          </div>

          <div className="flex gap-x-2 h-[2.4rem] text-sm">

            <div className="flex flex-1 max-w-[100px] items-center
            h-full border text-primary">
            <div
            onClick={() => decreaseAmount(id)}
            className="flex-1  flex justify-center items-center cursor-pointer h-full">
              <IoMdRemove />
            </div>

            <div className="h-full flex justify-center items-center px-2">
              {amount}</div>
            <div
            onClick={() => increaseAmount(id)}
            className="flex-1 h-full flex justify-center items-center cursor-pointer">
              <IoMdAdd />
            </div>
            </div>

            <p className="flex-1 flex items-center justify-around">
              $ {price}</p>

            <p className="flex-1 flex justify-end items-center text-primary font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem