import axiosInstance from '@/config/axiosInstance'
import useAuth from '@/hooks/useAuth'
import useNotify from '@/hooks/useNotify'
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Alert, Button, Form, Input, Typography } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const [form] = Form.useForm()
  const { notifyError, notifySuccess } = useNotify()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [registerError, setRegisterError] = useState(null)

  const handleRegister = () => {
    form.validateFields().then(values => {
      axiosInstance
        .post('/auth/register', values)
        .then(res => {
          const { user, accessToken } = res?.data
          login(user, accessToken)
          notifySuccess(
            'Đăng ký tài khoản thành công',
            'Vui lòng kiểm tra email để xác nhận tài khoản'
          )
          setTimeout(() => {
            navigate('/')
          }, 2000)
        })
        .catch(err => {
          setRegisterError(err.response.data.message)
        })
    })
  }

  return (
    <>
      <Typography.Title level={2} className='form__title'>
        Đăng ký tài khoản mới
      </Typography.Title>
      <Form form={form} layout='vertical' className='form sign-up-form' onFinish={handleRegister}>
        {registerError && (
          <Alert style={{ marginBottom: '2.4rem' }} message={registerError} type='error' showIcon />
        )}
        <Form.Item
          name='name'
          label='Họ tên'
          className='form__item'
          required={false}
          rules={[{ required: true, message: 'Vui lòng nhập tên của bạn...' }]}>
          <Input placeholder='Nhập tên của bạn...' prefix={<UserIcon className='form__icon' />} />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          className='form__item'
          required={false}
          rules={[
            { required: true, message: 'Vui lòng nhập email của bạn!' },
            {
              type: 'email',
              message: 'Email nhập vào không hợp lệ!',
            },
          ]}>
          <Input
            placeholder='Nhập email của bạn...'
            prefix={<EnvelopeIcon className='form__icon' />}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label='Mật khẩu'
          className='form__item'
          required={false}
          rules={[
            { required: true, message: 'Please input your Password!' },
            { min: 6, message: 'Password must be at least 6 characters!' },
          ]}>
          <Input.Password
            prefix={<LockClosedIcon className='form__icon' />}
            iconRender={visible => (visible ? <EyeIcon /> : <EyeSlashIcon />)}
            placeholder='Nhập mật khẩu của bạn...'
          />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='Mật khẩu xác nhận'
          className='form__item'
          required={false}
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu của bạn!' },
            { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
            ({ getFieldValue }) => ({
              validator: (_, value) => {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Mật khẩu bạn nhập không khớp!'))
              },
            }),
          ]}>
          <Input.Password
            prefix={<LockClosedIcon className='form__icon' />}
            iconRender={visible => (visible ? <EyeIcon /> : <EyeSlashIcon />)}
            placeholder='Nhập mật khẩu của bạn...'
          />
        </Form.Item>
        <Form.Item className='form__item'>
          <Button className='form__btn' type='primary' htmlType='submit'>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
      <div className='form-redirect'>
        <span>
          Đã có tài khoản?{' '}
          <Link to='/auth/login' className='link'>
            Đăng nhập ngay
          </Link>
        </span>
      </div>
    </>
  )
}

export default RegisterForm
