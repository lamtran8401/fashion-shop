import { notification } from 'antd'
import React from 'react'

const NotifyContext = React.createContext()
const NotifyProvider = props => {
  const [api, contextHolder] = notification.useNotification()

  const notify = (type, message, description, duration = 2) => {
    api[type]({
      message,
      description,
      duration,
    })
  }

  const notifyError = (message, description) => {
    notify('error', message, description)
  }

  const notifySuccess = (message, description) => {
    notify('success', message, description)
  }

  const notifyWarning = (message, description) => {
    notify('warning', message, description)
  }

  const notifyInfo = (message, description) => {
    notify('info', message, description)
  }

  return (
    <NotifyContext.Provider
      value={{
        notifyError,
        notifySuccess,
        notifyWarning,
        notifyInfo,
      }}>
      {contextHolder}
      {props.children}
    </NotifyContext.Provider>
  )
}

export { NotifyContext }
export default NotifyProvider
