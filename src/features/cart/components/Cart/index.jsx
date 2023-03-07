import { Button, Drawer, Typography } from 'antd'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { memo, useMemo } from 'react'
import emptyBagImg from '@/assets/empty-bag.jpeg'
import './Cart.scss'

const FooterCart = ({ total = 0 }) => {
  return (
    <div className='cart__footer'>
      <div className='cart__footer-total'>
        <div className='cart__footer-total-wrapper'>
          <Typography.Text className='cart__footer-total__title'>Total</Typography.Text>
          <Typography.Text className='cart__footer-total__price'>
            ${total}
          </Typography.Text>
        </div>
        <Typography.Paragraph className='cart__footer-total__text'>
          Shipping and taxes calculated at checkout.
        </Typography.Paragraph>
      </div>
      <Button type='primary' size='large' className='cart__footer-btn'>
        Checkout
      </Button>
    </div>
  )
}

const Cart = ({ title = 'Shopping Cart', open, onClose }) => {
  const total = useMemo(() => {
    return 0
  })

  return (
    <Drawer
      className='cart'
      width={460}
      title={title}
      closeIcon={<XMarkIcon className='cart__close-icon' />}
      headerStyle={{ borderBottom: 'none' }}
      footer={<FooterCart total={total} />}
      footerStyle={{ padding: '16px 24px' }}
      open={open}
      onClose={onClose}>
      <div className='cart__empty'>
        <p className='cart__empty-text'>Your cart is empty</p>
        <img className='cart__empty-img' src={emptyBagImg} alt='Empty cart image' />
      </div>
      {/* <BagItem item={{ name: 'P1', price: '200', quantity: '2' }} /> */}
    </Drawer>
  )
}

export default memo(Cart)
