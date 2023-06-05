import toCurrency from '@/utils/currency'
import { Tag, Typography } from 'antd'
import './OrderItems.scss'

const OrderItems = ({ items }) => {
  return (
    <div className='order__info__items'>
      <ul className='order__info__items__list'>
        {items?.map(item => (
          <li className='order-item' key={item.detailId}>
            <div className='order-item__img'>
              <img src={item?.images?.[0]} alt={item.name} />
            </div>
            <div className='order-item__desc'>
              <div className='order-item__desc__info'>
                <Typography.Text className='order-item__desc__info__name'>
                  {item.name}
                </Typography.Text>
                <div className='order-item__desc__info__options'>
                  <Tag className='order-item__desc__info__color' color='purple'>
                    {item.color}
                  </Tag>
                  <Tag className='order-item__desc__info__size' color='cyan'>
                    {item.size}
                  </Tag>
                </div>
                <Typography.Text className='order-item__desc__info__brand_category'>
                  Brand: {item.brand} - Category: {item.category}
                </Typography.Text>
              </div>
              <Typography.Text className='order-item__desc__price'>
                {item.quantity} x {toCurrency(item.price)}
              </Typography.Text>
              <Typography.Text className='order-item__desc__total'>
                {toCurrency(item.price * item.quantity)}
              </Typography.Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderItems
