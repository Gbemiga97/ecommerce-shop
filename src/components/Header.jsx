import { Link } from "react-router-dom"
import { useCartContext, useSideBarContext } from "../contexts"
import { BsBag } from "react-icons/bs"
import Logo from '../img/logo.svg'
import { useEffect, useState } from "react"


const Header = () => {

  const [header, setHeader] = useState(false)
  const {setIsOpen} = useSideBarContext()
  const {itemAmount} = useCartContext()


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setHeader(true) : setHeader(false)
    })
  })


  return (
    <header className={`${header ? 'bg-white py-4 shadow-md' : 'bg-none py-6' }
    fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
      <Link
      to='/'
      >
      <div>
        <img 
        className="w-[40px]"
        src={Logo} 
        alt="logo" />
      </div>
      </Link>
      <button 
      className="cursor-pointer flex relative "
      onClick={() => setIsOpen(prev => !prev)}
      >
        <BsBag className="text-2xl" />
        <div className="bg-red-500 absolute -right-2 text-[12px] w-[1.2rem] h-[1.2rem]
        text-white rounded-full flex justify-center items-center">
          {itemAmount}
        </div>
        </button>
        </div>
    </header>
  )
}

export default Header