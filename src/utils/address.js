import addressData from '../data/address/index.json'

const addressSrc = JSON.parse(JSON.stringify(addressData))

const getAddress = address => {
  const province = addressSrc.find(item => item.value === address.province)
  const district = province.children.find(item => item.value === address.district)
  const ward = district.children.find(item => item.value === address.ward)

  return `${address.detail}, ${ward.label}, ${district.label}, ${province.label}`
}

export default getAddress
