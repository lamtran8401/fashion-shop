import { Typography } from 'antd'
import './AdminDelivery.scss'

const AdminDelivery = () => {
  return (
    <div className='admin-delivery'>
      <div className='admin-delivery__header'>
        <Typography.Title level={3}>Vận chuyển</Typography.Title>
      </div>
      <div className='admin-delivery__body'></div>
    </div>
  )
}

export default AdminDelivery
