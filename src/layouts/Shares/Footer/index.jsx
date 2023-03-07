import './Footer.scss'
import { Layout, Typography } from 'antd'

const Footer = () => {
  return (
    <Layout.Footer id='footer' className='container'>
      <div style={{ display: 'flex' }}>
        <Typography.Title level={2}>Footer</Typography.Title>
      </div>
    </Layout.Footer>
  )
}

export default Footer
