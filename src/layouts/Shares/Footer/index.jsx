import { Layout, Typography } from 'antd'
import { memo } from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <Layout.Footer id='footer' className='container'>
      <div style={{ display: 'flex' }}>
        <Typography.Title level={2}>Footer</Typography.Title>
      </div>
    </Layout.Footer>
  )
}

export default memo(Footer)
