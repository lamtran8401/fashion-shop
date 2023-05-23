import { NotifyContext } from '@/context/NotifyContext'
import { useContext } from 'react'

const useNotify = () => {
  const notify = useContext(NotifyContext)
  if (!notify) throw new Error('useNotify must be used within an NotifyProvider')
  return notify
}

export default useNotify
