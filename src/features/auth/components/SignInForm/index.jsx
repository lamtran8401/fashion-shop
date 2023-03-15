import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

const SignInForm = () => {
  const [form] = Form.useForm()

  return (
    <>
      <Typography.Title level={2} className='form__title'>
        Sign in to your account
      </Typography.Title>
      <Form form={form} layout='vertical' className='form sign-in-form'>
        <Form.Item
          name='email'
          label='Email Address'
          className='form__item'
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
            prefix={<UserIcon className='form__icon' />}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          className='form__item'
          required={false}
          rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input.Password
            prefix={<LockClosedIcon className='form__icon' />}
            iconRender={visible => (visible ? <EyeIcon /> : <EyeSlashIcon />)}
            placeholder='Type your password here...'
          />
        </Form.Item>
        <Form.Item className='form-other-action'>
          <Checkbox className='form__remember'>Remember me</Checkbox>
          <Link to='#' className='link'>
            Forgot your password?
          </Link>
        </Form.Item>
        <Form.Item className='form__item'>
          <Button className='form__btn' type='primary' htmlType='submit'>
            Sign in
          </Button>
        </Form.Item>
      </Form>
      <div className='form-redirect'>
        <span>
          Don't have an account?{' '}
          <Link to='/auth/sign-up' className='link'>
            Sign up now
          </Link>
        </span>
      </div>
    </>
  )
}

export default SignInForm
