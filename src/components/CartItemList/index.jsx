import { memo } from 'react'
import CartItem from '../CartItem'
import './CartItemList.scss'

const CartItemList = ({ data }) => {
  return (
    <ul className='cart-item-list'>
      {data.map(item => (
        <li key={item.detailId} className='cart-item-list__item'>
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default memo(CartItemList)
