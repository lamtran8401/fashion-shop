import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeItems, changeRecipient, createCheckoutData } from '../reducer/checkoutSlice'

const CheckOutContext = createContext(null)
const CheckOutProvider = props => {
  const checkout = useSelector(state => state.checkout)
  const dispatch = useDispatch()

  const createCheckout = checkoutData => {
    dispatch(createCheckoutData(checkoutData))
  }

  const updateRecipient = recipient => {
    dispatch(changeRecipient(recipient))
  }

  const updateItems = items => {
    dispatch(changeItems(items))
  }

  return (
    <CheckOutContext.Provider
      value={{
        checkout,
        createCheckout,
        updateRecipient,
        updateItems,
      }}
      {...props}
    />
  )
}

export { CheckOutContext }
export default CheckOutProvider
