import AddressCard from '@/components/AddressCard'
import AddressModal from '@/components/AddressModal'
import useToggle from '@/hooks/useToggle'
import addressService from '@/services/address.service'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Button, Skeleton, Typography } from 'antd'
import { useQuery, useQueryClient } from 'react-query'
import './AddressPage.scss'

const AddressPage = () => {
  const [toggle, toggleOn, toggleOff] = useToggle()

  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: 'addresses',
    queryFn: () => addressService.getAddress(),
  })

  if (isLoading) return <Skeleton active />

  if (isError) return <div>{error.message}</div>

  const handleCreateAddress = async values => {
    await addressService.createAddress(values)
    queryClient.invalidateQueries('addresses')
  }

  const handleUpdateAddress = async (id, values) => {
    await addressService.updateAddress(id, values)
    queryClient.invalidateQueries('addresses')
  }

  const handleDeleteAddress = async id => {
    await addressService.deleteAddress(id)
    queryClient.invalidateQueries('addresses')
  }

  return (
    <div className='address'>
      <div className='address-header'>
        <Typography.Title level={3} className='user-page__title'>
          Thông tin địa chỉ nhận hàng
        </Typography.Title>
        <Button type='text' icon={<PlusIcon className='icon' />} onClick={toggleOn}>
          Địa chỉ mới
        </Button>
      </div>
      <div className='address-list'>
        {data &&
          data?.map(address => (
            <AddressCard
              key={address.id}
              data={address}
              selected={address.default}
              action={{
                type: 'update',
                handleAction: handleUpdateAddress,
              }}
              onDelete={handleDeleteAddress}
            />
          ))}
      </div>
      <AddressModal
        title='Thêm địa chỉ mới'
        visible={toggle}
        onCancel={toggleOff}
        action={{
          type: 'create',
          handleAction: handleCreateAddress,
        }}
      />
    </div>
  )
}

export default AddressPage
