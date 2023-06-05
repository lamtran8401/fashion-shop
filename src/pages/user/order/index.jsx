import { orderEnum } from '@/constant/order.constant'
import OrderList from '@/features/order/components/OrderList'
import { orderService } from '@/services/order.service'
import { Skeleton, Tabs, Typography } from 'antd'
import { useState } from 'react'
import { useQuery } from 'react-query'
import './OrderPage.scss'

const OrderPage = () => {
  const [status, setStatus] = useState('ALL')

  const { data, isLoading, isError } = useQuery({
    queryKey: 'orders',
    queryFn: () => orderService.getAll(),
    select: orders => {
      if (status === 'ALL') return orders
      return orders.filter(order => order.status === status)
    },
  })

  if (isLoading) {
    return <Skeleton active />
  }

  if (isError) {
    return <div>Error</div>
  }

  const handleChangeTab = key => {
    setStatus(key)
  }

  const items = [
    {
      key: 'ALL',
      label: `Tất cả`,
      children: <OrderList data={data} />,
    },
    {
      key: orderEnum.PENDING,
      label: `Đã tiếp nhận`,
      children: <OrderList data={data} />,
    },
    {
      key: orderEnum.DELIVERING,
      label: `Đang giao`,
      children: <OrderList data={data} />,
    },
    {
      key: orderEnum.DELIVERED,
      label: `Đã giao`,
      children: <OrderList data={data} />,
    },
    {
      key: orderEnum.CANCELED,
      label: `Đã hủy`,
      children: <OrderList data={data} />,
    },
  ]

  return (
    <div className='order-page'>
      <Typography.Title level={3}>Đơn hàng của bạn</Typography.Title>
      <Tabs defaultActiveKey='ALL' tabPosition='top' items={items} onChange={handleChangeTab} />
    </div>
  )
}

export default OrderPage
