import OrderList from '@/features/order/components/OrderList'
import { orderService } from '@/services/order.service'
import { Skeleton, Typography } from 'antd'
import { useQuery } from 'react-query'
import './OrderPage.scss'

const OrderPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'orders',
    queryFn: () => orderService.getAll(),
  })

  if (isLoading) {
    return <Skeleton active />
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className='order-page'>
      <Typography.Title level={3}>Đơn hàng của bạn</Typography.Title>
      <OrderList data={data} />
    </div>
  )
}

export default OrderPage
