import emptyBagImg from '@/assets/images/empty-bag.jpeg'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Drawer, Typography } from 'antd'
import { memo, useCallback } from 'react'
import { useCart } from '../../hooks'
import './Cart.scss'

const FooterCart = memo(({ total, onCheckOut }) => {
  return (
    <div className='cart__footer'>
      <div className='cart__footer-total'>
        <div className='cart__footer-total-wrapper'>
          <Typography.Text className='cart__footer-total__title'>Total</Typography.Text>
          <Typography.Text className='cart__footer-total__price'>
            ${total.totalPrice}
          </Typography.Text>
        </div>
        <Typography.Paragraph className='cart__footer-total__text'>
          Shipping and taxes calculated at checkout.
        </Typography.Paragraph>
      </div>
      <Button type='primary' size='large' className='cart__footer-btn' onClick={onCheckOut}>
        Checkout
      </Button>
    </div>
  )
})

const Cart = ({ title = 'Shopping Cart' }) => {
  const { openCart, toggleOff, products, total } = useCart()

  const handleCheckout = useCallback(() => {
    console.log('checkout')
  })

  return (
    <Drawer
      className='cart'
      width={460}
      title={title}
      closeIcon={<XMarkIcon className='cart__close-icon' />}
      headerStyle={{ borderBottom: 'none' }}
      footer={<FooterCart total={total} onCheckOut={handleCheckout} />}
      footerStyle={{ padding: '16px 24px' }}
      open={openCart}
      onClose={toggleOff}>
      <div className='cart__empty'>
        <p className='cart__empty-text'>Your cart is empty</p>
        <img className='cart__empty-img' src={emptyBagImg} alt='Empty cart image' loading='lazy' />
      </div>
      {/* <BagItem item={{ name: 'P1', price: '200', quantity: '2' }} /> */}
    </Drawer>
  )
}

export default memo(Cart)
