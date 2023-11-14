import { Product } from "../components"
import { useProductContext } from "../contexts"
import { Hero } from "../sections"


const Home = () => {

  const {products} = useProductContext()


  //get only men's & women's clothing category
  
  const filteredProducts = products.filter(item => item.category === "men's clothing" || item.category === "women's clothing")
  
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[1.8rem]
          max-w-sm mx-auto md:max-w-none md:mx-0">
            {
              filteredProducts.map((product) => (
               <Product  product={product} key={product.id} />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home