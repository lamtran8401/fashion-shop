import './ProductLayout.scss'

import { Outlet } from 'react-router-dom'
import BaseLayout from '../Shares/Base'
import Product from '@/components/Product'
import { Typography } from 'antd'

const ProductLayout = () => {
  return (
    <BaseLayout>
      <Outlet />
      <Typography.Title level={3}>Product List</Typography.Title>
      <div className='product-list'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <Product key={item} />
        ))}
      </div>
    </BaseLayout>
  )
}

export default ProductLayout
