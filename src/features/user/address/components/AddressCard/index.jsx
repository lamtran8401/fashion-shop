import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Card } from 'antd'
import './AddressCard.scss'

const AddressCard = ({ selected }) => {
  const className = selected ? 'address-card selected' : 'address-card'

  return (
    <Card className={className}>
      <div className='address-card-wrapper'>
        <div className='address-card__content'>
          <div className='address-card__content__name'>John Doe</div>
          <div className='address-card__content__address'>
            1234 Street Name, City, State, Country
          </div>
          <div className='address-card__content__phone'>+1 123 456 7890</div>
        </div>
        <div className='address-card__action-info'>
          {selected && <span className='badge'>Mặc định</span>}
          <div className='address-card__action-info__action'>
            <Cog6ToothIcon className='icon' />
          </div>
          <div className='address-card__action-info__info'>
            <XMarkIcon className='icon danger' />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AddressCard
