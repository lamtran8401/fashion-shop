import { Layout } from 'antd'
import Footer from '../Footer'
import Header from '../Header'

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
