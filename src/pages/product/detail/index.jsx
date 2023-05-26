import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Carousel } from 'antd'
import { useRef } from 'react'
import { useLoaderData } from 'react-router-dom'
import './ProductDetailPage.scss'

const ProductDetailPage = () => {
  const { images, name, description, price, productDetails, soldOut, brand, category } =
    useLoaderData()

  const carouselRef = useRef()

  const handlePrevImg = () => {
    carouselRef.current.prev()
  }
  const handleNextImg = () => {
    carouselRef.current.next()
  }

  return (
    <div className='product-detail-page'>
      <div className='carousel-wrapper'>
        <Carousel ref={carouselRef} autoplay className='carousel' effect='fade'>
          {images.map((image, index) => (
            <div key={index}>
              <img className='carousel-img' src={image} alt={name} />
            </div>
          ))}
        </Carousel>
        <div className='carousel-prev-btn carousel-btn' onClick={handlePrevImg}>
          <ChevronLeftIcon className='carousel-prev-btn__icon icon' />
        </div>
        <div className='carousel-next-btn carousel-btn' onClick={handleNextImg}>
          <ChevronRightIcon className='carousel-next-btn__icon icon' />
        </div>
      </div>
      <div className='product-detail-page__content'>
        <h1 className='product-detail-page__content__name'>{name}</h1>
        <p className='product-detail-page__content__description'>{description}</p>
        <p className='product-detail-page__content__price'>${price}</p>
        <p className='product-detail-page__content__sold-out'>{soldOut}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage
