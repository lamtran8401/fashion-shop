import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) || {
  items: [],
  total: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const existedItem = state.items.find(
        eItem => eItem.id === item.id && eItem.detailId === item.detailId
      )
      if (existedItem) {
        existedItem.quantity += item.quantity
        state.totalQuantity += item.quantity
      } else {
        state.totalQuantity += item.quantity
        state.items.push(item)
      }
      updateTotal(state)
      localStorage.setItem('cart', JSON.stringify(state))
    },

    removeFromCart(state, action) {
      const { id, detailId } = action.payload
      const existedItem = state.items.find(item => item.id === id && item.detailId === detailId)
      if (existedItem) {
        state.items = state.items.filter(item => item.id !== id && item.detailId !== detailId)
        state.totalQuantity -= existedItem.quantity
      }
      updateTotal(state)
      localStorage.setItem('cart', JSON.stringify(state))
    },

    updateQuantity(state, action) {
      const { id, detailId, quantity } = action.payload
      const existedItem = state.items.find(item => item.id === id && item.detailId === detailId)
      if (existedItem) {
        state.totalQuantity += quantity - existedItem.quantity
        existedItem.quantity = quantity
      }
      updateTotal(state)
      localStorage.setItem('cart', JSON.stringify(state))
    },

    updateTotal(state) {
      state.total = state.items.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)

      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

const updateTotal = state => {
  state.total = state.items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions

export default cartSlice.reducer
