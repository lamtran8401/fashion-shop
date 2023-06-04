import Order from '../Order'
import './OrderList.scss'

const OrderList = ({ data = [] }) => {
  return (
    <ul className='order-list'>
      {data.map(order => (
        <li key={order.id}>
          <Order order={order} />
        </li>
      ))}
    </ul>
  )
}

export default OrderList
