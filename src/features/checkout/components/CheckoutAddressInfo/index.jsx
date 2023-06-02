import recipientImg from '@/assets/images/recipient.png'
import useToggle from '@/hooks/useToggle'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Typography } from 'antd'
import ChangeAddressModal from '../ChangeAddressModal'
import './CheckoutAddressInfo.scss'

const CheckoutAddressInfo = ({ recipient }) => {
  const [toggle, toggleOn, toggleOff] = useToggle(false)

  const handleChangeAddress = () => {
    toggleOn()
  }

  return (
    <div className='checkout__recipient'>
      <div className='checkout__recipient-title'>
        <Typography.Title level={4}>Thông tin giao hàng</Typography.Title>
      </div>
      <div className='checkout__recipient-content'>
        <img
          src={recipientImg}
          alt='Recipient Image'
          className='checkout__recipient-content__img'
        />
        {recipient ? (
          <div className='checkout__recipient-content__desc'>
            <Typography.Text className='checkout__recipient-content__desc-name'>
              Người nhận: {recipient.name}
            </Typography.Text>
            <Typography.Text className='checkout__recipient-content__desc-phone'>
              Số điện thoại: {recipient.phone}
            </Typography.Text>
            <Typography.Text className='checkout__recipient-content__desc-address'>
              Địa chỉ: {recipient.address}
            </Typography.Text>
          </div>
        ) : (
          <div className='checkout__recipient-content__desc'>
            <Typography.Text className='checkout__recipient-content__desc__no-default'>
              Bạn chưa có thông tin giao hàng mặc định. Vui lòng chọn địa chỉ nhận hàng của bạn hoặc
              thêm thông tin giao hàng mặc định để tiện cho việc mua sắm lần sau.
            </Typography.Text>
          </div>
        )}
        <div className='checkout__recipient-content__btn' onClick={handleChangeAddress}>
          <ChevronRightIcon className='checkout__recipient__btn__icon icon' />
        </div>
        <ChangeAddressModal
          visible={toggle}
          onCancel={toggleOff}
          selectedAddressId={recipient?.addressId}
        />
      </div>
    </div>
  )
}

export default CheckoutAddressInfo
