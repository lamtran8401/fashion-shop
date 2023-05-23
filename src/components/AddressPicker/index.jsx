import address from '@/data/address'
import { Cascader } from 'antd'

const AddressPicker = ({
  onChange,
  placeholder = 'Please select your address...',
  value = null,
}) => {
  return value[0] ? (
    <Cascader
      onChange={onChange}
      showSearch
      options={address}
      placeholder={placeholder}
      defaultValue={value}
      style={{ width: '100%' }}
    />
  ) : (
    <Cascader
      onChange={onChange}
      showSearch
      options={address}
      placeholder={placeholder}
      style={{ width: '100%' }}
    />
  )
}

export default AddressPicker
