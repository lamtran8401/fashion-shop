import useToggle from '@/hooks/useToggle'
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, updateQuantity } from '../reducer/cartSlice'

const CartContext = createContext({})

const CartProvider = props => {
  const [isOpenCart, toggleOn, toggleOff] = useToggle()
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const addItem = item => {
    dispatch(addToCart(item))
  }

  const removeItem = (id, detailId) => {
    dispatch(removeFromCart({ id, detailId }))
  }

  const updateQty = (id, detailId, quantity) => {
    dispatch(updateQuantity({ id, detailId, quantity }))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        toggle: {
          isOpenCart,
          toggleOn,
          toggleOff,
        },
        action: {
          addItem,
          removeItem,
          updateQty,
        },
      }}
      {...props}
    />
  )
}

export { CartContext }

export default CartProvider
