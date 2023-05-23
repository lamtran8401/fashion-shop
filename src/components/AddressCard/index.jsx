import AddressModal from '@/components/AddressModal'
import useNotify from '@/hooks/useNotify'
import useToggle from '@/hooks/useToggle'
import getAddress from '@/utils/address'
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Card, Popconfirm } from 'antd'
import './AddressCard.scss'

const AddressCard = ({ selected, data, action, onDelete }) => {
  const className = selected ? 'address-card selected' : 'address-card'
  const { receiver, phone, province, district, ward, detail } = data
  const [toggle, toggleOn, toggleOff] = useToggle()
  const [toggleAddress, toggleOnAddress, toggleOffAddress] = useToggle()

  const { notifySuccess, notifyError } = useNotify()

  const handleDelete = async () => {
    try {
      await onDelete(data.id)
      toggleOff()
      notifySuccess('Xoá địa chỉ thành công', 'Địa chỉ của bạn đã được xoá khỏi danh sách')
    } catch (error) {
      toggleOff()
      notifyError('Xoá địa chỉ thất bại')
    }
  }

  return (
    <Card className={className}>
      <div className='address-card-wrapper'>
        <div className='address-card__content'>
          <div className='address-card__content__name'>{receiver}</div>
          <div className='address-card__content__address'>
            {getAddress({ province, district, ward, detail })}
          </div>
          <div className='address-card__content__phone'>{phone}</div>
        </div>
        <div className='address-card__action-info'>
          {selected && <span className='badge'>Mặc định</span>}
          <div className='address-card__action-info__action'>
            <Cog6ToothIcon className='icon' onClick={toggleOnAddress} />
          </div>
          <div className='address-card__action-info__info'>
            <Popconfirm
              title='Xoá địa chỉ'
              description='Bạn có chắc chắn muốn xoá địa chỉ này ?'
              placement='topLeft'
              cancelText='Huỷ'
              okText='Xoá'
              open={toggle}
              onOpenChange={toggleOn}
              onConfirm={handleDelete}
              onCancel={toggleOff}>
              <XMarkIcon className='icon danger' />
            </Popconfirm>
          </div>
        </div>
      </div>
      <AddressModal
        action={action}
        title='Chỉnh sửa địa chỉ'
        visible={toggleAddress}
        onCancel={toggleOffAddress}
        data={data}
      />
    </Card>
  )
}

export default AddressCard
