import useCartContext from './useCartContext'
import useCartProducts from './useCartProducts'
import useCartTotal from './useCartTotal'

const useCart = () => {
  const { openCart, toggleOn, toggleOff } = useCartContext()
  const { products, addProduct, removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCartProducts()

  const { total, updateCartTotal } = useCartTotal()

  return {
    openCart,
    toggleOn,
    toggleOff,
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    total,
    updateCartTotal,
  }
}

export default useCart
