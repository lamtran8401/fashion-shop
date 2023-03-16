import address from '@/data/address'
import { Cascader } from 'antd'

const AddressPicker = () => {
  return (
    <Cascader
      showSearch
      options={address}
      placeholder='Please select your address...'
      style={{ width: 'max-content' }}
    />
  )
}

export default AddressPicker
