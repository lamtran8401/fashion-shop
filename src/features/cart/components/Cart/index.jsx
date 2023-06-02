import emptyBagImg from '@/assets/images/empty-bag.jpeg'
import useCart from '@/features/cart/hooks/useCart'
import useCheckOut from '@/features/checkout/hooks/useCheckout'
import useNotify from '@/hooks/useNotify'
import getAddress, { getDefaultAddress } from '@/utils/address'
import toCurrency from '@/utils/currency'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Drawer, Typography } from 'antd'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItemList from '../CartItemList'
import './Cart.scss'

const FooterCart = memo(({ total, onCheckOut }) => {
  return (
    <div className='cart__footer'>
      <div className='cart__footer-total'>
        <div className='cart__footer-total-wrapper'>
          <Typography.Text className='cart__footer-total__title'>Tổng cộng</Typography.Text>
          <Typography.Text className='cart__footer-total__price'>
            {toCurrency(total)}
          </Typography.Text>
        </div>
        <Typography.Paragraph className='cart__footer-total__text'>
          Tiền vận chuyển được tính lúc thanh toán
        </Typography.Paragraph>
      </div>
      <Button type='primary' size='large' className='cart__footer-btn' onClick={onCheckOut}>
        Thanh toán
      </Button>
    </div>
  )
})

const Cart = ({ title = 'Giỏ hàng' }) => {
  const { notifyInfo } = useNotify()
  const { cart, toggle } = useCart()
  const navigate = useNavigate()
  const { createCheckout } = useCheckOut()

  const handleCheckout = useCallback(async () => {
    if (cart.totalQuantity <= 0)
      return notifyInfo('Giỏ hàng của bạn trống', 'Vui lòng thêm sản phẩm vào giỏ hàng')

    const checkoutData = {
      items: cart.items,
      total: cart.total,
      totalQuantity: cart.totalQuantity,
      recipient: null,
      fromCart: true,
    }
    const addressDefault = await getDefaultAddress()
    if (addressDefault) {
      const { detail, ward, district, province, receiver, phone, id } = addressDefault
      const fullAddress = getAddress({ detail, ward, district, province })
      const recipient = {
        name: receiver,
        phone: phone,
        address: fullAddress,
        addressId: id,
      }
      checkoutData.recipient = recipient
    }
    createCheckout(checkoutData)
    toggle.toggleOff()
    navigate('/checkout')
  })

  return (
    <Drawer
      className='cart'
      width={500}
      title={title}
      closeIcon={<XMarkIcon className='cart__close-icon' />}
      footer={<FooterCart total={cart.total} onCheckOut={handleCheckout} />}
      footerStyle={{ padding: '16px 24px' }}
      open={toggle.isOpenCart}
      onClose={toggle.toggleOff}>
      {cart.totalQuantity > 0 ? (
        <CartItemList data={cart.items} />
      ) : (
        <div className='cart__empty'>
          <p className='cart__empty-text'>Giỏ hàng của bạn trống</p>
          <img
            className='cart__empty-img'
            src={emptyBagImg}
            alt='Empty cart image'
            loading='lazy'
          />
        </div>
      )}
    </Drawer>
  )
}

export default memo(Cart)
