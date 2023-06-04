import { Typography } from 'antd'
import './AdminOrders.scss'

const AdminOrders = () => {
  return (
    <div className='admin-orders'>
      <div className='admin-orders__header'>
        <Typography.Title level={3}>Đơn hàng</Typography.Title>
      </div>
      <div className='admin-orders__body'></div>
    </div>
  )
}

export default AdminOrders
