import '@/layouts/AuthLayout/Form.scss'
import { Button, DatePicker, Form, Input, Select, Typography } from 'antd'
import './Account.scss'

const Account = () => {
  const [form] = Form.useForm()

  form.submit = () => console.log('update user information')

  return (
    <div className='account'>
      <Typography.Title level={2} className='user-page__title'>
        User Information
      </Typography.Title>
      <Form form={form} layout='vertical' className='form form__user-info'>
        <Form.Item label='Full Name' name='name' className='form__item'>
          <Input placeholder='Enter your new full name...' />
        </Form.Item>
        <Form.Item label='Email' name='email' className='form__item'>
          <Input placeholder='Enter your new email address..' />
        </Form.Item>
        <Form.Item label='Phone Number' name='phone' className='form__item'>
          <Input type='number' placeholder='Enter your new phone number...' />
        </Form.Item>
        <Form.Item label='Date of birth' name='dateOfBirth' className='form__item'>
          <DatePicker format='DD/MM/YYYY' placeholder='Select your date of birth...' />
        </Form.Item>
        <Form.Item label='Gender' name='gender' className='form__item'>
          <Select placeholder='Select your gender'>
            <Select.Option value='male'>Male</Select.Option>
            <Select.Option value='female'>Female</Select.Option>
            <Select.Option value='other'>Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className='form__item'>
          <Button className='form__btn' type='primary' htmlType='submit'>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Account
