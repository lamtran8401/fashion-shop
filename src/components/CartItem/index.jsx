import useCart from '@/features/cart/hooks/useCart'
import toCurrency from '@/utils/currency'
import { MinusSmallIcon, PlusSmallIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Button, Popconfirm, Tag, Typography } from 'antd'
import { memo } from 'react'
import './CartItem.scss'

const CartItem = ({ item }) => {
  const { action } = useCart()

  const handleUpdateQuantity = quantity => {
    action.updateQty(item.id, item.detailId, quantity)
  }

  const handleIncreaseQuantity = () => {
    handleUpdateQuantity(item.quantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (item.quantity === 1) return
    handleUpdateQuantity(item.quantity - 1)
  }

  const handleDeleteItem = () => {
    action.removeItem(item.id, item.detailId)
  }

  return (
    <div className='cart-item'>
      <img className='cart-item__img' src={item?.images[0]} alt={item.name} />
      <div className='cart-item__info'>
        <p className='cart-item__info__name'>{item.name}</p>
        <div className='cart-item__info__options'>
          <Tag className='cart-item__info__color' color='purple'>
            {item.color}
          </Tag>
          <Tag className='cart-item__info__size' color='cyan'>
            {item.size}
          </Tag>
        </div>
        <Typography.Text className='cart-item__info__price'>
          {toCurrency(item.price)}
        </Typography.Text>
        <div className='cart-item__info__qty'>
          <span className='cart-item__info__qty__title'>Qty: </span>
          <Button className='cart-item__info__qty__btn' onClick={handleDecreaseQuantity}>
            <MinusSmallIcon className='icon' />
          </Button>
          <span className='cart-item__info__qty__number'>{item.quantity}</span>
          <Button className='cart-item__info__qty__btn' onClick={handleIncreaseQuantity}>
            <PlusSmallIcon className='icon' />
          </Button>
          <Popconfirm
            title='Bạn có chắc chắn xoá sản phẩm này khỏi giỏ hàng?'
            onConfirm={handleDeleteItem}
            okText='Ok'
            cancelText='Huỷ'>
            <Button className='cart-item__info__qty__btn cart-item__trash'>
              <TrashIcon className='icon' />
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  )
}

export default memo(CartItem)
