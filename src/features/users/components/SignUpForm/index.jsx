import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  const [form] = Form.useForm()

  return (
    <>
      <Typography.Title level={2} className='sign-in-form__title'>
        Sign up to create your account
      </Typography.Title>
      <Form form={form} layout='vertical' className='sign-in-form'>
        <Form.Item
          name='email'
          label='Email Address'
          className='sign-in-form__item'
          required={false}
          rules={[
            { required: true, message: 'Please input your Username!' },
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]}>
          <Input
            placeholder='Type your email address here...'
            prefix={<UserIcon className='form-icon' />}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          className='sign-in-form__item'
          required={false}
          rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input.Password
            prefix={<LockClosedIcon className='form-icon' />}
            iconRender={visible => (visible ? <EyeIcon /> : <EyeSlashIcon />)}
            placeholder='Type your password here...'
          />
        </Form.Item>
        <Form.Item className='sign-in-form__item'>
          <Button className='sign-in-form__btn' type='primary' htmlType='submit'>
            Sign in
          </Button>
        </Form.Item>
      </Form>
      <div className='signup-redirect'>
        <span>
          Already have an account?{' '}
          <Link to='/auth/sign-in' className='link'>
            Sign in now
          </Link>
        </span>
      </div>
    </>
  )
}

export default SignUpForm
