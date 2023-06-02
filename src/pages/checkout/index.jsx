import CheckoutAddressInfo from '@/features/checkout/components/CheckoutAddressInfo'
import CheckoutItems from '@/features/checkout/components/CheckoutItems'
import CheckoutTotal from '@/features/checkout/components/CheckoutTotal'
import useCheckOut from '@/features/checkout/hooks/useCheckout'
import './CheckOutPage.scss'

const CheckOutPage = () => {
  const { checkout } = useCheckOut()
  const { items, total, totalQuantity, recipient, fromCart } = checkout

  if (totalQuantity <= 0) return <div>Giỏ hàng của bạn trống</div>
  if (!items) return <div>Lỗi giỏ hàng trống</div>

  const shippingFee = total >= 500000 ? 0 : 30000

  return (
    <div className='checkout-page'>
      <div className='checkout__info'>
        <CheckoutAddressInfo recipient={recipient} />
        <CheckoutItems items={items} />
      </div>
      <CheckoutTotal total={total} shippingFee={shippingFee} totalQuantity={totalQuantity} />
    </div>
  )
}

export default CheckOutPage
