import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const useCart = () => {
  const cart = useContext(CartContext)
  if (!cart) throw new Error('useCart must be used within an CartProvider')
  return cart
}

export default useCart
