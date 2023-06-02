import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('checkout')) || {
  items: [],
  total: 0,
  totalQuantity: 0,
  recipient: null,
  fromCart: false,
}

const checkOutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    createCheckoutData(state, action) {
      state.items = action.payload.items
      state.total = action.payload.total
      state.totalQuantity = action.payload.totalQuantity
      state.recipient = action.payload.recipient
      state.fromCart = action.payload.fromCart

      localStorage.setItem('checkout', JSON.stringify(state))
    },

    changeItems(state, action) {
      state.items = action.payload.items
      state.total = action.payload.total
      state.totalQuantity = action.payload.totalQuantity

      localStorage.setItem('checkout', JSON.stringify(state))
    },

    changeRecipient(state, action) {
      state.recipient = action.payload
      localStorage.setItem('checkout', JSON.stringify(state))
    },
  },
})

export const { createCheckoutData, changeRecipient, changeItems } = checkOutSlice.actions

export default checkOutSlice.reducer
