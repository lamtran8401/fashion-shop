import useCart from '@/features/cart/hooks/useCart'
import useCheckOut from '@/features/checkout/hooks/useCheckout'
import useNotify from '@/hooks/useNotify'
import getAddress, { getDefaultAddress } from '@/utils/address'
import toCurrency from '@/utils/currency'
import { ChevronLeftIcon, ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Button, Carousel, InputNumber, Segmented, Typography } from 'antd'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import './ProductDetailPage.scss'

const ProductDetailPage = () => {
  const { id, images, name, description, price, productDetails, soldOut, brand, category } =
    useLoaderData()

  const { notifySuccess, notifyError } = useNotify()

  const { action } = useCart()

  const { createCheckout } = useCheckOut()

  const carouselRef = useRef()

  const navigate = useNavigate()

  const handlePrevImg = () => {
    carouselRef.current.prev()
  }
  const handleNextImg = () => {
    carouselRef.current.next()
  }

  const colorOptions = useMemo(() => productDetails.map(productDetail => productDetail.color), [])

  const sizeOptions = useMemo(() => {
    const options = productDetails.map(productDetail => productDetail.size)
    return [...new Set(options)]
  }, [])

  const [colorSelected, setColorSelected] = useState(colorOptions[0] || '')
  const [stockSize, setStockSize] = useState(10)
  const [detailId, setDetailId] = useState(productDetails[0].id)
  const [detailPrice, setDetailPrice] = useState(productDetails[0].price)

  const sizeOptionsByColor = useMemo(() => {
    const options = productDetails
      .filter(productDetail => productDetail.color === colorSelected)
      .map(productDetail => ({
        size: productDetail.size,
        stock: productDetail.stock,
      }))

    return sizeOptions.map(size => {
      if (options.find(option => option.size === size)) return size

      return {
        label: size,
        value: size,
        disabled: true,
      }
    })
  }, [colorSelected])

  const [sizeSelected, setSizeSelected] = useState('')
  const [quantitySelected, setQuantitySelected] = useState(1)

  useEffect(() => {
    const productDetail = productDetails.find(
      productDetail => productDetail.color === colorSelected && productDetail.size === sizeSelected
    )

    if (productDetail) {
      setStockSize(productDetail.stock)
      setQuantitySelected(1)
      setDetailId(productDetail.id)
      setDetailPrice(productDetail.price)
    }
  }, [sizeSelected])

  const handleAddToCart = () => {
    if (!colorSelected || !sizeSelected) {
      notifyError('Vui lòng chọn màu sắc và kích thước')
      return
    }

    const productDetail = productDetails.find(
      productDetail => productDetail.color === colorSelected && productDetail.size === sizeSelected
    )

    if (!productDetail) {
      notifyError('Không tìm thấy sản phẩm')
      return
    }

    if (quantitySelected <= 0) {
      notifyError('Số lượng sản phẩm không hợp lệ')
      return
    }

    if (productDetail.stock < quantitySelected) {
      notifyError('Số lượng sản phẩm không đủ')
      return
    }

    action.addItem({
      id,
      name,
      price,
      detailId: productDetail.id,
      images,
      color: colorSelected,
      size: sizeSelected,
      quantity: quantitySelected,
    })
    notifySuccess('Thêm vào giỏ hàng thành công')
  }

  const handleBuyNow = async () => {
    if (!colorSelected || !sizeSelected) {
      notifyError('Lỗi mua hàng', 'Vui lòng chọn màu sắc và kích thước')
      return
    }

    const checkoutData = {
      items: [],
      total: quantitySelected * detailPrice,
      totalQuantity: quantitySelected,
      recipient: null,
    }

    const item = {
      id,
      name,
      images,
      color: colorSelected,
      size: sizeSelected,
      price,
      quantity: quantitySelected,
      detailId,
    }

    checkoutData.items.push(item)

    const addressDefault = await getDefaultAddress()
    if (addressDefault) {
      const { detail, ward, district, province, receiver, phone, id } = addressDefault
      const fullAddress = getAddress({ detail, ward, district, province })
      const recipient = {
        name: receiver,
        phone: phone,
        address: fullAddress,
        addressId: id,
      }
      checkoutData.recipient = recipient
    }
    createCheckout(checkoutData)
    navigate('/checkout')
  }

  return (
    <div className='product-detail-page'>
      <div className='carousel-wrapper'>
        <Carousel ref={carouselRef} autoplay className='carousel' effect='fade'>
          {images.map((image, index) => (
            <div key={index} className='carousel-item'>
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
        <Typography.Title level={2} className='product-detail-page__content__name'>
          {name}
        </Typography.Title>
        <Typography.Paragraph className='product-detail-page__content__description'>
          {description}
        </Typography.Paragraph>
        <div className='product-detail__options'>
          <div className='product-detail__options__item'>
            <Typography.Text className='product-detail__options__item__title'>
              Thương hiệu:
            </Typography.Text>
            <Typography.Text className='product-detail__options__item__value'>
              {brand}
            </Typography.Text>
          </div>
          <div className='product-detail__options__item'>
            <Typography.Text className='product-detail__options__item__title'>
              Danh mục:
            </Typography.Text>
            <Typography.Text className='product-detail__options__item__value'>
              {category}
            </Typography.Text>
          </div>
          <div className='product-detail__options__item product-color'>
            <Typography.Text className='product-detail__options__item__title'>
              Màu sắc:
            </Typography.Text>
            <Typography.Text className='product-detail__options__item__value'>
              <Segmented
                className='product-detail__options__item__value__segmented'
                options={colorOptions}
                value={colorSelected}
                onChange={value => {
                  setColorSelected(value)
                  setSizeSelected('')
                }}
              />
            </Typography.Text>
          </div>
          <div className='product-detail__options__item product-size'>
            <Typography.Text className='product-detail__options__item__title'>
              Kích thước:
            </Typography.Text>
            <Typography.Text className='product-detail__options__item__value'>
              <Segmented
                className='product-detail__options__item__value__segmented'
                options={sizeOptionsByColor}
                value={sizeSelected}
                onChange={setSizeSelected}
              />
            </Typography.Text>
          </div>
          <div className='product-detail__options__item product-quantity'>
            <Typography.Text className='product-detail__options__item__title'>
              Số lượng:
            </Typography.Text>
            <Typography.Text className='product-detail__options__item__value'>
              <InputNumber
                min={1}
                max={stockSize}
                value={quantitySelected}
                onChange={setQuantitySelected}
                className='product-detail__options__item__value__input'
              />
            </Typography.Text>
          </div>
        </div>
        <Typography.Paragraph className='product-detail-page__content__price'>
          {toCurrency(detailPrice)}
        </Typography.Paragraph>
        <div className='product-detail-page__content__btn'>
          <Button
            size='large'
            className='product-detail-page__content__btn-add-to-cart'
            onClick={handleAddToCart}>
            <ShoppingBagIcon className='icon' />
            Thêm vào giỏ hàng
          </Button>
          <Button
            size='large'
            className='product-detail-page__content__btn-buy'
            type='primary'
            onClick={handleBuyNow}>
            Mua ngay
          </Button>
        </div>
        <p className='product-detail-page__content__sold-out'>Đã bán: {soldOut}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage
