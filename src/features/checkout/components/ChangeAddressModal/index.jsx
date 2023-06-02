import addressService from '@/services/address.service'
import { Button, Modal, Skeleton } from 'antd'
import { useQuery } from 'react-query'
import useCheckOut from '../../hooks/useCheckout'
import ChangeAddressItem from '../ChangeAddressItem'
import './ChangeAddressModal.scss'

const ChangeAddressModal = ({ visible, onCancel, selectedAddressId }) => {
  const { updateRecipient } = useCheckOut()

  const { data, isLoading, isError } = useQuery({
    queryKey: 'addresses',
    queryFn: () => addressService.getAddress(),
  })

  return (
    <Modal
      title='Chọn địa chỉ giao hàng'
      open={visible}
      onCancel={onCancel}
      footer={
        <Button type='primary' onClick={onCancel}>
          Xác nhận
        </Button>
      }>
      <ul className='change-address-list'>
        {isLoading && <Skeleton active />}
        {isError && <p>Đã có lỗi xảy ra</p>}
        {data?.map(address => (
          <li key={address.id} className='change-address-list__item'>
            <ChangeAddressItem
              address={address}
              selectedId={selectedAddressId}
              onSelect={updateRecipient}
            />
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default ChangeAddressModal
