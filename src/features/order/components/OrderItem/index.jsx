import toCurrency from '@/utils/currency'
import { Tag, Typography } from 'antd'
import './OrderItem.scss'

const OrderItem = ({ item }) => {
  const { product, detail, quantity, price } = item
  return (
    <div className='order-item-list__item'>
      <div className='order-item-list__item__image'>
        <img src={product.images[0]} alt='product order image' />
      </div>
      <div className='order-item-list__item__info'>
        <Typography.Text className='order-item-list__item__info__name'>
          {product?.name}
        </Typography.Text>
        <div className='order-item-list__item__info__detail'>
          <Tag className='order-item-list__item__info__detail__color' color='purple'>
            {detail.color}
          </Tag>
          <Tag className='order-item-list__item__info__detail__size' color='cyan'>
            {detail.size}
          </Tag>
        </div>
        <Typography.Text className='order-item-list__item__info__quantity'>
          Qty: {quantity}
        </Typography.Text>
      </div>
      <Typography.Text className='order-item-list__item__price'>
        {toCurrency(price)}
      </Typography.Text>
    </div>
  )
}

export default OrderItem
