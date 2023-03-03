import { Card } from 'antd'
import './Product.scss'

const Product = () => {
  return (
    <Card
      className='product'
      // style={{ width: 240 }}
      tabBarExtraContent={<a href='#'>More</a>}
      cover={
        <img
          alt='example'
          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
      }>
      <Card.Meta title='Europe Street beat' description='www.instagram.com' />
    </Card>
  )
}

export default Product
