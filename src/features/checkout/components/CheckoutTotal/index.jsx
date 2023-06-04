import { clearCartData } from '@/features/cart/reducer/cartSlice'
import useNotify from '@/hooks/useNotify'
import { orderService } from '@/services/order.service'
import toCurrency from '@/utils/currency'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from 'antd'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useCheckOut from '../../hooks/useCheckOut'
import { clearCheckoutData } from '../../reducer/checkoutSlice'
import './CheckoutTotal.scss'

const CheckoutTotal = ({ total, shippingFee, totalQuantity }) => {
  const { checkout } = useCheckOut()
  const { notifySuccess } = useNotify()
  const [btnLoading, setBtnLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { recipient, fromCart } = checkout

  const mutation = useMutation({
    mutationKey: 'create-order',
    mutationFn: payload => orderService.createOrder(payload),
  })

  const handleCheckout = () => {
    const items = checkout.items.map(item => ({
      productId: item.id,
      productDetailId: item.detailId,
      quantity: item.quantity,
    }))

    const payload = {
      items,
      recipientName: recipient.name,
      recipientPhone: recipient.phone,
      recipientAddress: recipient.address,
    }

    setBtnLoading(true)

    mutation.mutate(payload, {
      onSuccess: data => {
        if (fromCart) {
          dispatch(clearCheckoutData())
          dispatch(clearCartData())
        }

        setBtnLoading(false)
        notifySuccess('Đặt hàng thành công', 'Cảm ơn bạn đã mua hàng tại shop')
        navigate(`/order-result`, { state: { id: data.id } })
      },
      onError: error => {
        setBtnLoading(false)
        console.log(error)
      },
    })
  }

  return (
    <div className='checkout__total'>
      <Typography.Title level={4}>Tổng thanh toán</Typography.Title>
      <div className='checkout__total__content'>
        <div className='checkout__total__content__item'>
          <Typography.Text className='checkout__total__content__item__title'>
            Số lượng sản phẩm:
          </Typography.Text>
          <Typography.Text className='checkout__total__content__item__value'>
            {totalQuantity}
          </Typography.Text>
        </div>
        <div className='checkout__total__content__item'>
          <Typography.Text className='checkout__total__content__item__title'>
            Phương thức thanh toán:
          </Typography.Text>
          <Typography.Text className='checkout__total__content__item__value'>COD</Typography.Text>
        </div>
        <div className='checkout__total__content__item'>
          <Typography.Text className='checkout__total__content__item__title'>
            Tạm tính:
          </Typography.Text>
          <Typography.Text className='checkout__total__content__item__value'>
            {toCurrency(total)}
          </Typography.Text>
        </div>
        <div className='checkout__total__content__item'>
          <Typography.Text className='checkout__total__content__item__title'>
            Phí vận chuyển:
          </Typography.Text>
          <Typography.Text className='checkout__total__content__item__value'>
            + {toCurrency(shippingFee)}
          </Typography.Text>
        </div>
        <div className='checkout__total__content__item'>
          <Typography.Text className='checkout__total__content__item__title'>
            Tổng cộng:
          </Typography.Text>
          <Typography.Text className='checkout__total__content__item__value total'>
            {toCurrency(total + shippingFee)}
          </Typography.Text>
        </div>
        <div className='checkout__total__content__item'>
          <Typography.Text className='checkout__total__content__item__value tip'>
            <QuestionMarkCircleIcon className='checkout__total__content__item__icon icon' />
            Phí vận chuyển được miễn phí cho đơn hàng có giá trị từ 500.000đ trở lên.
          </Typography.Text>
        </div>
      </div>
      <Button
        type='primary'
        size='large'
        className='checkout__btn'
        loading={btnLoading}
        onClick={handleCheckout}>
        Đặt hàng
      </Button>
    </div>
  )
}

export default CheckoutTotal
