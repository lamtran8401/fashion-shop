import useNotify from '@/hooks/useNotify'
import { Form, Input, Modal, Switch } from 'antd'
import { useState } from 'react'
import AddressPicker from '../AddressPicker'
import './AddressModal.scss'

const AddressModal = ({ title, visible, onCancel, data, action }) => {
  const [form] = Form.useForm()
  const { notifySuccess, notifyError } = useNotify()
  const [loading, setLoading] = useState(false)

  const handleSaveAddress = () => {
    form
      .validateFields()
      .then(values => {
        const formReq = {
          receiver: values.receiver,
          phone: values.phone,
          province: values.address[0],
          district: values.address[1],
          ward: values.address[2],
          detail: values.detail,
          default: values.default,
        }
        setLoading(true)
        return formReq
      })
      .then(values => {
        const { type, handleAction } = action
        if (type === 'create') handleAction(values)
        else handleAction(data.id, values)
        return type
      })
      .then(actionType => {
        if (actionType === 'create')
          notifySuccess('Thêm địa chỉ thành công', 'Địa chỉ của bạn đã được thêm vào danh sách')
        else notifySuccess('Cập nhật địa chỉ thành công', 'Địa chỉ của bạn đã được cập nhật')
        onCloseModal()
      })
      .catch(err => {
        notifyError('Thêm địa chỉ thất bại')
        onCloseModal()
        console.log(err)
      })
  }

  const onCloseModal = () => {
    form.resetFields()
    setLoading(false)
    onCancel()
  }

  const onChangeAddress = value => {
    form.setFieldsValue({ address: value })
  }

  const onChangeDefault = value => {
    form.setFieldsValue({ default: value })
  }

  return (
    <Modal
      title={title}
      open={visible}
      onCancel={onCloseModal}
      onOk={handleSaveAddress}
      confirmLoading={loading}
      okText='Lưu'
      cancelText='Hủy'>
      <Form
        form={form}
        layout='vertical'
        className='form address-form'
        initialValues={{
          receiver: data?.receiver,
          phone: data?.phone,
          address: [data?.province, data?.district, data?.ward],
          detail: data?.detail,
          default: data?.default,
        }}>
        <Form.Item
          name='receiver'
          label='Nguời nhận'
          className='form__item'
          required={true}
          rules={[{ required: true, message: 'Vui lòng nhập tên người nhận' }]}>
          <Input placeholder='Nhập tên người nhận' />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Số điện thoại'
          className='form__item'
          required={true}
          rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
          <Input type='number' placeholder='Nhập số điện thoại' />
        </Form.Item>
        <Form.Item
          name='address'
          label='Địa chỉ'
          className='form__item'
          required={true}
          rules={[
            { required: true, message: 'Vui lòng chọn địa chỉ' },
            {
              validator: (_, value) => {
                if (value[0] && value[1] && value[2]) return Promise.resolve()
                else return Promise.reject('Vui lòng chọn địa chỉ')
              },
            },
          ]}>
          <AddressPicker
            placeholder='Vui lòng chọn địa chỉ'
            value={[data?.province, data?.district, data?.ward]}
            onChange={onChangeAddress}
          />
        </Form.Item>
        <Form.Item
          name='detail'
          label='Địa chỉ cụ thể'
          className='form__item'
          required={true}
          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ cụ thể' }]}>
          <Input placeholder='Nhập địa chỉ cụ thể' />
        </Form.Item>
        <Form.Item
          name='default'
          label='Đặt làm địa chỉ mặc định'
          className='form__item'
          valuePropName='checked'>
          <Switch defaultChecked={data ? data.default : false} onChange={onChangeDefault} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddressModal
