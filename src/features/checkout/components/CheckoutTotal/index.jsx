import toCurrency from '@/utils/currency'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from 'antd'
import './CheckoutTotal.scss'

const CheckoutTotal = ({ total, shippingFee, totalQuantity }) => {
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
      <Button type='primary' size='large' className='checkout__btn'>
        Đặt hàng
      </Button>
    </div>
  )
}

export default CheckoutTotal
