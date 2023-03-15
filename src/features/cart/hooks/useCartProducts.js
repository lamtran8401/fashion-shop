import { useCallback } from 'react'
import useCartContext from './useCartContext'
import useCartTotal from './useCartTotal'

const useCartProducts = () => {
  const { products, setProducts } = useCartContext()
  const { updateCartTotal } = useCartTotal()

  const updateQuantitySafely = useCallback((currentProduct, targetProduct, quantity) => {
    if (currentProduct.id === targetProduct.id) {
      return Object.assign({
        ...currentProduct,
        quantity: currentProduct.quantity + quantity,
      })
    }
    return currentProduct
  })

  const addProduct = useCallback(newProduct => {
    let updatedProducts
    const isProductAlreadyInCart = products.some(product => newProduct.id === product.id)

    if (isProductAlreadyInCart)
      updatedProducts = products.map(product =>
        updateQuantitySafely(product, newProduct, newProduct.quantity)
      )
    else updatedProducts = [...products, newProduct]

    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  })

  const removeProduct = useCallback(productToRemove => {
    const updatedProducts = products.filter(product => product.id !== productToRemove.id)
    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  })

  const increaseProductQuantity = useCallback(productToIncrease => {
    const updatedProducts = products.map(product =>
      updateQuantitySafely(product, productToIncrease, 1)
    )
    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  })

  const decreaseProductQuantity = useCallback(productToDecrease => {
    const updatedProducts = products.map(product =>
      updateQuantitySafely(product, productToDecrease, -1)
    )
    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  })

  return {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  }
}

export default useCartProducts
