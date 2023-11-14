import { useCartContext, useSideBarContext } from "../contexts"
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import CartItem from "./CartItem"
import { Link } from "react-router-dom"


const SideBar = () => {

  const {isOpen,  handleClose} = useSideBarContext()
  const {cart, clearCart, total, itemAmount} = useCartContext()


  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
    xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[2.3rem]`}>
      <div className="flex items-center justify-between py-6 border-red-600">
        <p className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})</p>
        <button 
        onClick={handleClose}
        className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[620px] overflow-auto
      overflow-x-hidden border-b">
        {
          cart.map((item) => (
            <CartItem handleClose={handleClose} item={item} key={item.id} />
          ))
        }
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">

          <p className="uppercase font-semibold">
            <span className="mr-2">Total:</span> $ 
            {parseFloat(total).toFixed(2)}
          </p>

          <button 
          onClick={clearCart}
          className="cursor-pointer bg-red-500 text-white py-4 w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 />
          </button>
        </div>
        <Link
        to={'/'}
        className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
        View cart
        </Link>
        <Link
                to={'/'}
                className="bg-primary flex p-4 justify-center items-center text-gray-200 w-full font-medium"
                >
        Checkout
        </Link>
      </div>
    </div>
  )
}

export default SideBar