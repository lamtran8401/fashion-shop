import addressService from '@/services/address.service'
import addressData from '../data/address/index.json'

const addressSrc = JSON.parse(JSON.stringify(addressData))

const getAddress = address => {
  const province = addressSrc.find(item => item.value === address.province)
  const district = province.children.find(item => item.value === address.district)
  const ward = district.children.find(item => item.value === address.ward)

  return `${address.detail}, ${ward.label}, ${district.label}, ${province.label}`
}

const getUserAddress = async () => {
  const addresses = await addressService.getAddress()
  if (!addresses) return []
  return addresses
}

const getDefaultAddress = async () => {
  const addresses = await getUserAddress()
  if (!addresses) return null
  return addresses.find(item => item.default)
}

export { getDefaultAddress, getUserAddress }

export default getAddress
