import { Link } from 'react-router-dom'
import WomanImg from '../img/woman_hero.png'



const Hero = () => {
  return (
    <section className='bg-hero h-[800px] bg-no-repeat
    bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3' />
            <p>
              New Trend</p>
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>
              WOMEN</span>
          </h1>
          <Link
          to={'/'} 
          className='self-start uppercase font-semibold border-b-2 border-primary'
          >
          DisCover More
          </Link>
        </div>

        <div>
          <img 
          className='hidden lg:flex'
          src={WomanImg}
           alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero