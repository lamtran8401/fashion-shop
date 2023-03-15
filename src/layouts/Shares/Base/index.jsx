import { Cart } from '@/features/cart/components'
import { Layout } from 'antd'
import Footer from '../Footer'
import Header from '../Header'

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Cart />
      <Layout.Content className='container'>{children}</Layout.Content>
      <Footer />
    </>
  )
}

export default BaseLayout
