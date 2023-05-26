import ProductList from '@/components/ProductList'
import { productService } from '@/services/product.service'
import { Skeleton, Typography } from 'antd'
import { useQuery, useQueryClient } from 'react-query'
import './ProductPage.scss'

const ProductPage = () => {
  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: 'products',
    queryFn: () => productService.getList(),
  })

  if (isLoading) return <Skeleton active />
  if (isError) return <div>{error}</div>

  return (
    <div className='product-page'>
      <Typography.Title level={2}>Tất cả sản phẩm</Typography.Title>
      <ProductList data={data} />
    </div>
  )
}

export default ProductPage
