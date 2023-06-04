import OrderItem from '../OrderItem'
import './OrderItems.scss'

const OrderItems = ({ orderItems }) => {
  return (
    <ul className='order-item-list'>
      {orderItems?.map(item => (
        <li key={item.id}>
          <OrderItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default OrderItems
