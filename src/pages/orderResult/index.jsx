import { Button, Result } from 'antd'
import { useLocation } from 'react-router-dom'

const OrderResult = () => {
  const location = useLocation()
  return (
    <Result
      status='success'
      title='Chúc mừng bạn đã đặt hàng thành công!'
      subTitle={`Mã đơn hàng của bạn là ${location.state?.id}. Hãy theo dõi đơn hàng của bạn trong mục đơn hàng`}
      extra={[
        <Button type='primary' key='console'>
          Mua tiếp
        </Button>,
      ]}
    />
  )
}

export default OrderResult
