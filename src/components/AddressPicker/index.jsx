import address from '@/data/address'
import { Cascader } from 'antd'

const AddressPicker = ({ placeholder = 'Please select your address...' }) => {
  return (
    <Cascader
      showSearch
      options={address}
      placeholder={placeholder}
      style={{ width: 'max-content' }}
    />
  )
}

export default AddressPicker
