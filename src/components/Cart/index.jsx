import emptyBagImg from '@/assets/images/empty-bag.jpeg'
import useCart from '@/features/cart/hooks/useCart'
import toCurrency from '@/utils/currency'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Drawer, Typography } from 'antd'
import { memo, useCallback } from 'react'
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
  const { cart, toggle } = useCart()

  const handleCheckout = useCallback(() => {
    console.log('checkout')
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
