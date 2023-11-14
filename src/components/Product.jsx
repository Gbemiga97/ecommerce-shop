import {BsPlus, BsEyeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Product = ({product}) => {

  const {title, id, image, category, price} = product

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center '>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
            className='max-h-[160px] group-hover:scale-110 transition duration-300'
            src={image} 
            alt={title} />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center
        opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500  '>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link
          to={`product/${id}`}
          className='cursor-pointer w-12 h-12 flex justify-center items-center bg-white text-primary drop-shadow-xl'
          >
          <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <p  className='text-sm capitalize text-gray-500'>
          {category}</p>
        <Link
        to={`product/${id}`}
        >
        <h2 className='font-semibold mb-1'>
          {title}</h2>
        </Link>
        <p className='font-semibold'>
         $ {price}</p>
      </div>
    </div>
  )
}

export default Product