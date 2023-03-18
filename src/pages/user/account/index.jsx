import '@/layouts/AuthLayout/Form.scss'
import { Button, DatePicker, Form, Input, Select, Typography } from 'antd'
import './AccountPage.scss'

const AccountPage = () => {
  const [form] = Form.useForm()

  form.submit = () => console.log('update user information')

  return (
    <div className='account'>
      <Typography.Title level={2} className='user-page__title'>
        Thông tin tài khoản
      </Typography.Title>
      <Form form={form} layout='vertical' className='form form__user-info'>
        <Form.Item label='Họ tên' name='name' className='form__item'>
          <Input placeholder='Nhập họ tên mới...' />
        </Form.Item>
        <Form.Item label='Email' name='email' className='form__item'>
          <Input placeholder='Nhập địa chỉ email mới...' />
        </Form.Item>
        <Form.Item label='Số điện thoại' name='phone' className='form__item'>
          <Input type='number' placeholder='Nhập số điện thoại mới...' />
        </Form.Item>
        <Form.Item label='Ngày sinh' name='dateOfBirth' className='form__item'>
          <DatePicker format='DD/MM/YYYY' placeholder='Chọn ngày sinh của bạn...' />
        </Form.Item>
        <Form.Item label='Giới tính' name='gender' className='form__item'>
          <Select placeholder='Chọn giới tính của bạn...'>
            <Select.Option value='male'>Nam</Select.Option>
            <Select.Option value='female'>Nữ</Select.Option>
            <Select.Option value='other'>Khác</Select.Option>
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
