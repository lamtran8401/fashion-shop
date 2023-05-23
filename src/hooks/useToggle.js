import { useCallback, useState } from 'react'

const useToggle = (initialState = false) => {
  const [isToggle, setToggle] = useState(initialState)

  const toggleOn = useCallback(() => {
    setToggle(true)
  }, [])

  const toggleOff = useCallback(() => {
    setToggle(false)
  }, [])

  return [isToggle, toggleOn, toggleOff]
}

export default useToggle
