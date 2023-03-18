import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [form] = Form.useForm()

  return (
    <>
      <Typography.Title level={2} className='form__title'>
        Đăng nhập vào tài khoản của bạn
      </Typography.Title>
      <Form form={form} layout='vertical' className='form sign-in-form'>
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
          <Input placeholder='Nhập email của bạn...' prefix={<UserIcon className='form__icon' />} />
        </Form.Item>
        <Form.Item
          name='password'
          label='Mật khẩu'
          className='form__item'
          required={false}
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}>
          <Input.Password
            prefix={<LockClosedIcon className='form__icon' />}
            iconRender={visible => (visible ? <EyeIcon /> : <EyeSlashIcon />)}
            placeholder='Nhập mật khẩu của bạn...'
          />
        </Form.Item>
        <Form.Item className='form-other-action'>
          <Checkbox className='form__remember'>Ghi nhớ tài khoản</Checkbox>
          <Link to='#' className='link'>
            Quên mật khẩu?
          </Link>
        </Form.Item>
        <Form.Item className='form__item'>
          <Button className='form__btn' type='primary' htmlType='submit'>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <div className='form-redirect'>
        <span>
          Chưa có tài khoản?{' '}
          <Link to='/auth/register' className='link'>
            Đăng ký ngay
          </Link>
        </span>
      </div>
    </>
  )
}

export default LoginForm
