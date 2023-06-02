import getAddress from '@/utils/address'
import './ChangeAddressItem.scss'

const ChangeAddressItem = ({ address, selectedId, onSelect }) => {
  const { id, receiver, phone, province, district, ward, detail } = address

  const handleSelectAddress = () => {
    onSelect({
      name: receiver,
      phone,
      address: getAddress({ detail, province, district, ward }),
      addressId: id,
    })
  }

  return (
    <div
      className={'change-address-item' + (selectedId && selectedId === id ? ' selected' : '')}
      onClick={handleSelectAddress}>
      <div className='change-address-item__name'>{receiver}</div>
      <div className='change-address-item__phone'>{phone}</div>
      <div className='change-address-item__address'>
        {getAddress({ detail, province, district, ward })}
      </div>
    </div>
  )
}

export default ChangeAddressItem
