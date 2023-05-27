import useCart from '@/features/cart/hooks/useCart'
import toCurrency from '@/utils/currency'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './Product.scss'

const Product = ({ data }) => {
  const { id, images, name, price, productDetails } = data

  const { action } = useCart()

  const handleBuy = () => {
    console.log('buy')
  }

  const handleAddToCart = () => {
    action.addItem({
      id,
      name,
      images,
      price,
      detailId: productDetails[0].id,
      color: productDetails[0].color,
      size: productDetails[0].size,
      quantity: 1,
    })
  }
  return (
    <div className='product'>
      <Link to={`/product/${id}`} className='product-navigate'>
        <div className='product-card'>
          <img className='product-card-img' src={images[0]} alt='product image' />
          <div className='product-card-body'>
            <h3 level={3} className='product-card-body-title'>
              {name}
            </h3>
            <p className='product-card-body-price'>{toCurrency(price)}</p>
          </div>
        </div>
      </Link>
      <div className='product-card-footer'>
        <Button className='product-card-footer-add-to-cart' onClick={handleAddToCart}>
          <PlusIcon className='icon' />
        </Button>
        <Button className='product-card-footer-buy' type='primary' onClick={handleBuy}>
          Mua ngay
        </Button>
      </div>
    </div>
  )
}

export default Product
