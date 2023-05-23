import { useCallback } from 'react'
import useCartContext from './useCartContext'

const useCartTotal = () => {
  const { total, setTotal } = useCartContext()

  const updateCartTotal = useCallback(products => {
    const productQuantity = products.reduce((sum, product) => sum + product.quantity, 0)

    const totalPrice = products.reduce((sum, product) => {
      sum += product.price * product.quantity
      return sum
    }, 0)

    const total = {
      productQuantity,
      totalPrice,
    }

    setTotal(total)
  })

  return { total, updateCartTotal }
}

export default useCartTotal
