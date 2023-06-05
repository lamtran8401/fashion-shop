import toCurrency from '@/utils/currency'
import { Tag, Typography } from 'antd'
import './CheckoutItems.scss'

const CheckoutItems = ({ items }) => {
  console.log(items)
  return (
    <div className='checkout__info__items'>
      <div className='checkout__info__items__title'>
        <Typography.Title level={4}>Sản phẩm</Typography.Title>
      </div>
      <ul className='checkout__info__items__list'>
        {items?.map(item => (
          <li className='checkout-item' key={item.detailId}>
            <div className='checkout-item__img'>
              <img src={item?.images?.[0]} alt={item.name} />
            </div>
            <div className='checkout-item__desc'>
              <div className='checkout-item__desc__info'>
                <Typography.Text className='checkout-item__desc__info__name'>
                  {item.name}
                </Typography.Text>
                <div className='checkout-item__desc__info__options'>
                  <Tag className='checkout-item__desc__info__color' color='purple'>
                    {item.color}
                  </Tag>
                  <Tag className='checkout-item__desc__info__size' color='cyan'>
                    {item.size}
                  </Tag>
                </div>
                <Typography.Text className='checkout-item__desc__info__qty'>
                  Qty: {item.quantity}
                </Typography.Text>
              </div>
              <Typography.Text className='checkout-item__desc__price'>
                {item.quantity} x {toCurrency(item.price)}
              </Typography.Text>
              <Typography.Text className='checkout-item__desc__total'>
                {toCurrency(item.price * item.quantity)}
              </Typography.Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CheckoutItems
