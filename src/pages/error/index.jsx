import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from 'antd'
import { useRouteError } from 'react-router-dom'
import './ErrorPage.scss'

const ErrorPage = () => {
  const error = useRouteError()

  const status = error?.status || 404
  const erorrTitle = error?.statusText || 'Page Not Found'
  const errorMessage =
    error?.error?.message || 'Sorry, we couldn’t find the page you’re looking for.'

  return (
    <div className='error-page'>
      <div className='error-page-wrapper'>
        <p className='status-code'>{status}</p>
        <Typography.Title className='error-title'>{erorrTitle}</Typography.Title>
        <p className='error-message'>{errorMessage}</p>
        <div className='direct-btn'>
          <Button type='primary' href='/'>
            Go back to Home
          </Button>
          <Button type='link' href='#'>
            Contact Support
            <ArrowSmallRightIcon className='icon' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
