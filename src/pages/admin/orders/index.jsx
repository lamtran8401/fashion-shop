import recipientImg from '@/assets/images/recipient.png'
import { orderEnum, orderStatus, orderStatusString } from '@/constant/order.constant'
import useToggle from '@/hooks/useToggle'
import { orderService } from '@/services/order.service'
import toCurrency from '@/utils/currency'
import { toDateString } from '@/utils/date'
import toCheckoutObject from '@/utils/order'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { Drawer, Select, Skeleton, Table, Tag, Typography } from 'antd'
import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import './AdminOrders.scss'
import OrderItems from './OrderItems'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Ngày đặt hàng',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: createdAt => {
      return toDateString(createdAt)
    },
  },
  {
    title: 'ID người đặt',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'Tên người nhận',
    dataIndex: 'recipientName',
    key: 'recipientName',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'recipientPhone',
    key: 'recipientPhone',
  },
  {
    title: 'Tổng tiền',
    dataIndex: 'total',
    key: 'total',
    render: total => {
      return toCurrency(total)
    },
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      return <Tag color={orderStatus[status]}>{orderStatusString[status]}</Tag>
    },
  },
]

const AdminOrders = () => {
  const [toggle, toggleOn, toggleOff] = useToggle()
  const [orderSelected, setOrderSelected] = useState(null)

  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery({
    queryKey: 'orders',
    queryFn: () => orderService.getAllOrdersAdmin(),
  })

  const handleUpdateStatus = async (id, status) => {
    await orderService.updateStatus(id, status)
    setOrderSelected(prev => {
      return {
        ...prev,
        status,
      }
    })
    queryClient.invalidateQueries('orders')
  }

  if (isLoading) return <Skeleton active />

  if (isError) return <div>Đã có lỗi xảy ra</div>

  return (
    <div className='admin-orders'>
      <div className='admin-orders__header'>
        <Typography.Title level={3}>Đơn hàng</Typography.Title>
      </div>
      <div className='admin-orders__body'>
        <Table
          dataSource={data}
          columns={columns}
          rowKey={order => {
            return order.id
          }}
          pagination={{
            pageSize: 12,
            position: ['bottomRight'],
            size: 'small',
          }}
          onRow={order => {
            return {
              onClick: () => {
                setOrderSelected(order)
                toggleOn()
              },
            }
          }}
        />
        <Drawer
          title='Chi tiết đơn hàng'
          placement='right'
          open={toggle}
          onClose={() => {
            setOrderSelected(null)
            toggleOff()
          }}
          width={700}>
          <div className='admin-orders__drawer'>
            <div className='admin-orders__drawer__header'>
              <Typography.Title level={5}>Đơn hàng #{orderSelected?.id}</Typography.Title>
              <Typography.Text type='secondary'>
                Ngày đặt: {toDateString(orderSelected?.createdAt)}
              </Typography.Text>
              <Tag color={orderStatus[orderSelected?.status]}>
                {orderStatusString[orderSelected?.status]}
              </Tag>
            </div>

            <div className='admin-orders__drawer__recipient'>
              <img
                src={recipientImg}
                alt='Recipient Image'
                className='admin-orders__drawer__recipient__img'
              />
              <div className='admin-orders__drawer__recipient__info'>
                <Typography.Text className='admin-orders__drawer__text'>
                  Người nhận: {orderSelected?.recipientName}
                </Typography.Text>
                <Typography.Text className='admin-orders__drawer__text'>
                  Số điện thoại: {orderSelected?.recipientPhone}
                </Typography.Text>
                <Typography.Text className='admin-orders__drawer__text'>
                  Địa chỉ: {orderSelected?.recipientAddress}
                </Typography.Text>
              </div>
            </div>
            <OrderItems items={toCheckoutObject(orderSelected?.orderItems)} />
            <div className='admin-orders__drawer__sumary'>
              <Typography.Text className='admin-orders__drawer__text'>
                Tổng sản phẩm: {orderSelected?.totalQuantity}
              </Typography.Text>
              <Typography.Text className='admin-orders__drawer__text total'>
                <BanknotesIcon className='icon' /> Tổng tiền: {toCurrency(orderSelected?.total)}
              </Typography.Text>
            </div>
            <div className='admin-orders__drawer__update-status'>
              <Typography.Text className='admin-orders__drawer__text'>
                Cập nhật trạng thái đơn hàng:
              </Typography.Text>
              <Select
                disabled={
                  orderSelected?.status === orderEnum.DELIVERED ||
                  orderSelected?.status === orderEnum.CANCELED
                }
                className='admin-orders__drawer__select'
                value={orderEnum[orderSelected?.status]}
                onChange={value => {
                  handleUpdateStatus(orderSelected?.id, value)
                }}>
                <Select.Option value={orderEnum.PENDING} disabled>
                  Đã tiếp nhận
                </Select.Option>
                <Select.Option value={orderEnum.DELIVERING}>Đang giao hàng</Select.Option>
                <Select.Option value={orderEnum.DELIVERED}>Đã giao hàng</Select.Option>
                <Select.Option value={orderEnum.CANCELED}>Đã hủy</Select.Option>
              </Select>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default AdminOrders
