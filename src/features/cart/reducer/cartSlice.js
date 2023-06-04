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
      if (existedItem) existedItem.quantity += item.quantity
      else state.items.push(item)

      state.totalQuantity = getQty(state)
      updateTotal(state)
      localStorage.setItem('cart', JSON.stringify(state))
    },

    removeFromCart(state, action) {
      const { id, detailId } = action.payload
      const { items } = state
      const existedItem = items.find(item => {
        if (item.id === id && item.detailId === detailId) return true
        return false
      })

      if (existedItem) {
        state.items = items.filter(item => {
          if (item.id !== id || item.detailId !== detailId) return true
          return false
        })
        state.totalQuantity = getQty(state)
      }

      updateTotal(state)
      localStorage.setItem('cart', JSON.stringify(state))
    },

    updateQuantity(state, action) {
      const { id, detailId, quantity } = action.payload
      const existedItem = state.items.find(item => item.id === id && item.detailId === detailId)
      if (existedItem) {
        existedItem.quantity = quantity
        state.totalQuantity = getQty(state)
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

    clearCartData(state) {
      state.items = []
      state.total = 0
      state.totalQuantity = 0
      localStorage.removeItem('cart')
    },
  },
})

const updateTotal = state => {
  state.total = state.items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

const getQty = state => {
  return state.items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
}

export const { addToCart, removeFromCart, updateQuantity, clearCartData } = cartSlice.actions

export default cartSlice.reducer
