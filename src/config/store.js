import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/reducer/cartSlice'
import checkOutReducer from '../features/checkout/reducer/checkoutSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkOutReducer,
  },
})
