import { Layout } from 'antd'
import Footer from '../footer'
import Header from '../header'

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Layout.Content className='container'>{children}</Layout.Content>
      <Footer />
    </>
  )
}

export default BaseLayout
