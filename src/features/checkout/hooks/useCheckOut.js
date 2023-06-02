import { useContext } from 'react'
import { CheckOutContext } from '../context/CheckOutContext'

const useCheckOut = () => {
  const checkOut = useContext(CheckOutContext)

  if (!checkOut) throw new Error('useCheckOut must be used within an CheckOutProvider')

  return checkOut
}

export default useCheckOut
