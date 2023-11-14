import { createContext, useContext, useEffect, useState } from "react"


const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  //item amount state
  const [itemAmount, setItemAmount] = useState(0)
 // total price state
 const [total, setTotal] = useState(0)


 useEffect(() => {
  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.amount
  }, 0)
  setTotal(total)
 })

  useEffect(() => {
    if(cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
       return accumulator + currentItem.amount
       },0)
       setItemAmount(amount)
    }
  }, [cart])

  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    //check if the item is already in the cart
    const cartItem = cart.find(item => item.id === id)
    //if cart item is already in cart increase the amount
    if(cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id) => {
       const newCart = cart.filter(item => item.id !== id)

       setCart(newCart)
  }
 
   const clearCart = () => {
    setCart([])
   }


   const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
    addToCart(cartItem, id)
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
    if(cartItem) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } 
      if (cartItem.amount < 2) {
        removeFromCart(id)
    }
  }
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total
  }

  return (
    <CartContext.Provider 
    value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider