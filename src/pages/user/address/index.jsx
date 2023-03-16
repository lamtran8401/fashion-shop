import AddressPicker from '@/components/AddressPicker'
import { Typography } from 'antd'
import './Address.scss'

const Address = () => {
  return (
    <div className='address'>
      <Typography.Title level={3}>Address</Typography.Title>
      <AddressPicker />
    </div>
  )
}

export default Address
