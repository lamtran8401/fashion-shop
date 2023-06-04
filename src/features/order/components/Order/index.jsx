import { orderStatus, orderStatusString } from '@/constant/order.constant'
import toCurrency from '@/utils/currency'
import { toDateString } from '@/utils/date'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { Divider, Popover, Tag, Typography } from 'antd'
import OrderItems from '../OrderItems'
import './Order.scss'

const Order = ({ order }) => {
  return (
    <div className='order'>
      <Popover
        placement='bottom'
        title='Thông tin giao hàng'
        content={
          <div className='order__popover'>
            <Typography.Text className='order__popover__text'>
              Người nhận: {order.recipientName}
            </Typography.Text>
            <Typography.Text className='order__popover__text'>
              Số điện thoại: {order.recipientPhone}
            </Typography.Text>
            <Typography.Text className='order__popover__text'>
              Địa chỉ: {order.recipientAddress}
            </Typography.Text>
          </div>
        }>
        <div className='order-header'>
          <Typography.Title level={5}>Đơn hàng #{order?.id}</Typography.Title>
          <Typography.Text type='secondary'>
            Ngày đặt: {toDateString(order?.createdAt)}
          </Typography.Text>
          <Tag color={orderStatus[order?.status]}>{orderStatusString[order?.status]}</Tag>
        </div>
      </Popover>
      <Divider />
      <OrderItems orderItems={order?.orderItems} />
      <Divider />
      <div className='order-footer'>
        <Typography.Text className='order-footer__qty'>
          Tổng sản phẩm: {order?.totalQuantity}
        </Typography.Text>
        <Typography.Text className='order-footer__total'>
          <BanknotesIcon className='icon' />
          <Typography.Text className='order-footer__total__value'>
            Thành tiền: {toCurrency(order?.total)}
          </Typography.Text>
        </Typography.Text>
      </div>
    </div>
  )
}

export default Order
