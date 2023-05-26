import Product from '../Product'
import './ProductList.scss'

const ProductList = ({ data = [] }) => {
  return (
    <div className='product-list'>
      {data.map(product => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  )
}

export default ProductList
