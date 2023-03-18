import AddressCard from '@/features/user/address/components/AddressCard'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from 'antd'
import './AddressPage.scss'

const AddressPage = () => {
  return (
    <div className='address'>
      <div className='address-header'>
        <Typography.Title level={3} className='user-page__title'>
          Thông tin địa chỉ nhận hàng
        </Typography.Title>
        <Button type='text' icon={<PlusIcon className='icon' />}>
          Địa chỉ mới
        </Button>
      </div>
      <div className='address-list'>
        <AddressCard />
        <AddressCard selected />
        <AddressCard />
      </div>
    </div>
  )
}

export default AddressPage
