import axiosInstance from '@/config/axiosInstance'
import useAuth from '@/hooks/useAuth'
import useNotify from '@/hooks/useNotify'
import '@/layouts/auth/Form.scss'
import toDayjs from '@/utils/date'
import { Button, DatePicker, Form, Input, Select, Typography } from 'antd'
import './AccountPage.scss'

const AccountPage = () => {
  const { notifySuccess } = useNotify()
  const [form] = Form.useForm()
  const { currentUser, updateCurrentUser } = useAuth()
  const { name, email, phone, birthDate, gender } = currentUser
  const handleSubmit = values => {
    if (values.birthDay) values.birthDate = values.birthDay.format('DD/MM/YYYY')
    axiosInstance
      .put('/users', values)
      .then(res => {
        updateCurrentUser(res.data)
        notifySuccess('Cập nhật thông tin thành công', 'Thông tin của bạn đã được cập nhật')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='account'>
      <Typography.Title level={2} className='user-page__title'>
        Thông tin tài khoản
      </Typography.Title>
      <Form
        form={form}
        layout='vertical'
        className='form form__user-info'
        initialValues={{
          name,
          email,
          phone,
          birthDay: birthDate ? toDayjs(birthDate) : null,
          gender,
        }}
        onFinish={handleSubmit}>
        <Form.Item label='Họ tên' name='name' className='form__item'>
          <Input placeholder='Nhập họ tên mới...' />
        </Form.Item>
        <Form.Item label='Email' name='email' className='form__item'>
          <Input placeholder='Nhập địa chỉ email mới...' />
        </Form.Item>
        <Form.Item label='Số điện thoại' name='phone' className='form__item'>
          <Input type='number' placeholder='Nhập số điện thoại mới...' />
        </Form.Item>
        <Form.Item label='Ngày sinh' name='birthDay' className='form__item'>
          <DatePicker format='DD/MM/YYYY' placeholder='Chọn ngày sinh của bạn...' />
        </Form.Item>
        <Form.Item label='Giới tính' name='gender' className='form__item'>
          <Select placeholder='Chọn giới tính của bạn...'>
            <Select.Option value='MALE'>Nam</Select.Option>
            <Select.Option value='FEMALE'>Nữ</Select.Option>
            <Select.Option value='OTHER'>Khác</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className='form__item'>
          <Button className='form__btn' type='primary' htmlType='submit'>
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AccountPage
