import { Card } from 'antd'
import './Product.scss'
import { Link } from 'react-router-dom'

const Product = ({ productId }) => {
  return (
    <Link to={`/product/${productId}`}>
      <Card
        className='product'
        bordered={false}
        bodyStyle={{ padding: 16 }}
        cover={
          <img
            className='product__img'
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
          />
        }>
        <Card.Meta title='Europe Street beat' description='www.instagram.com' />
      </Card>
    </Link>
  )
}

export default Product
