import { createContext, useContext, useEffect, useState } from "react"


const ProductContext = createContext()
export const useProductContext = () =>  useContext(ProductContext)

const ProductContextProvider = ({children}) => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts();
  }, [])
  

  const contextValue = {
    products
  }

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider