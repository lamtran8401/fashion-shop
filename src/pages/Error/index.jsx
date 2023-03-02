import { Button, Input, Typography } from 'antd'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()

  if (!error) return <p>uncaught</p>

  return (
    <div className='error-page'>
      <Typography.Paragraph>{error.status}</Typography.Paragraph>
      <Typography.Title>{error.statusText}</Typography.Title>
      <Typography.Paragraph>{error.error.message}</Typography.Paragraph>
      <div className='direct-btn'>
        <Button type='primary' href='/'>
          Go back to Home
        </Button>
        <Button type='link' href='#'>
          Contact Support
        </Button>
      </div>
      <Input />
    </div>
  )
}

export default Error
