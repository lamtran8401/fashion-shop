import { Button, Modal, Typography } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthErrorModal = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth/login')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Modal
      title='Lỗi hệ thống'
      open
      footer={[
        <Button key='cancel' onClick={() => navigate('/auth/login')} type='primary'>
          Đăng nhập lại ngay
        </Button>,
      ]}>
      <Typography.Paragraph>
        Phiên đăng nhập của bạn đã hết hạn. Hệ thống sẽ đưa bạn về trang đăng nhập sau 2s.
      </Typography.Paragraph>
    </Modal>
  )
}

export default AuthErrorModal
