import { useToggle } from '@/hooks'
import { createContext, useState } from 'react'

const CartContext = createContext({})

const totalInitialValues = {
  productQuantity: 0,
  totalPrice: 0,
}

const CartProvider = props => {
  const [openCart, toggleOn, toggleOff] = useToggle()
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(totalInitialValues)

  return (
    <CartContext.Provider
      value={{ openCart, toggleOn, toggleOff, products, setProducts, total, setTotal }}
      {...props}
    />
  )
}

export { CartContext }

export default CartProvider
