import returnImg from '@/assets/images/001-return-box.png'
import deliverImg from '@/assets/images/002-delivery-man.png'
import supportImg from '@/assets/images/003-customer-service.png'
import logo from '@/assets/logo.png'
import useNotify from '@/hooks/useNotify'
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline'
import { Button, Divider, Input, Layout, Typography } from 'antd'
import { useState } from 'react'
import './Footer.scss'

const Footer = () => {
  const { notifySuccess, notifyWarning } = useNotify()
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email.trim()) {
      notifyWarning('Vui lòng nhập email', 'Email không được để trống')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      notifyWarning('Email không hợp lệ', 'Vui lòng nhập email hợp lệ')
      return
    }
    notifySuccess('Đăng ký thành công', 'Cảm ơn bạn đã đăng ký nhận tin từ chúng tôi.')
    setEmail('')
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  return (
    <Layout.Footer id='footer' className='footer'>
      <div className='footer-subscribe'>
        <Typography.Title level={3} className='footer-title txt-center'>
          Đăng ký ngay để nhận tin mới từ chúng tôi
        </Typography.Title>
        <Typography.Paragraph className='footer-subtitle txt-center'>
          Chúng tôi sẽ gửi các thông tin mới nhất về các sản phẩm, dịch vụ, khuyến mãi, tuyển dụng,
          sự kiện từ chúng tôi.
        </Typography.Paragraph>
        <div className='footer-form'>
          <Input
            placeholder='Nhập email của bạn'
            className='footer-form-input'
            onChange={handleChangeEmail}
            value={email}
          />
          <Button type='primary' className='footer-form-btn' onClick={handleSubscribe}>
            <PaperAirplaneIcon className='footer-form-btn-icon icon' />
          </Button>
        </div>
      </div>

      <div className='footer-service'>
        <div className='footer-service-item'>
          <img src={returnImg} alt='service' className='footer-service-item-img' />
          <Typography.Title level={5} className='footer-service-item-title'>
            Đổi trả miễn phí
          </Typography.Title>
          <Typography.Paragraph className='footer-service-item-desc'>
            Chất lượng đảm bảo, không bị lỗi
          </Typography.Paragraph>
        </div>
        <div className='footer-service-item'>
          <img src={deliverImg} alt='service' className='footer-service-item-img' />
          <Typography.Title level={5} className='footer-service-item-title'>
            Miễn phí vận chuyển
          </Typography.Title>
          <Typography.Paragraph className='footer-service-item-desc'>
            Miễn phí vận chuyển cho đơn hàng trên 500.000đ
          </Typography.Paragraph>
        </div>
        <div className='footer-service-item'>
          <img src={supportImg} alt='service' className='footer-service-item-img' />
          <Typography.Title level={5} className='footer-service-item-title'>
            Hỗ trợ 24/7
          </Typography.Title>
          <Typography.Paragraph className='footer-service-item-desc'>
            Hỗ trợ 24/7, đội ngũ nhân viên chuyên nghiệp
          </Typography.Paragraph>
        </div>
      </div>
      <Divider />
      <div className='footer-wrapper container'>
        <div className='footer-brand'>
          <Typography.Paragraph className='footer-brand-title'>
            <img className='footer-brand-logo' src={logo} alt='logo footer' />
            <Typography.Title level={5} className='footer-brand-name'>
              BLOOM SELLER
            </Typography.Title>
          </Typography.Paragraph>
          <Typography.Paragraph className='footer-brand-desc'>
            BLOOM là thương hiệu thời trang với phong cách trẻ trung, năng động, sáng tạo. Bên cạnh
            đó đây cũng là nơi tập hợp các sản phẩm chất lượng từ các LocalBrand khác nhau trong cả
            nước.
          </Typography.Paragraph>
          <Typography.Paragraph className='footer-brand-desc'>
            Theo dõi chúng tôi trên: Facebook, Instagram, Tiktok.
          </Typography.Paragraph>
        </div>
        <div className='footer-contact'>
          <Typography.Title level={5} className='footer-contact-title'>
            LIÊN HỆ VỚI CHÚNG TÔI NGAY
          </Typography.Title>
          <Typography.Paragraph className='footer-contact-desc'>
            <span className='footer-contact-desc-icon'>
              <MapIcon className='icon' />
            </span>
            <span className='footer-contact-desc-text'>
              Địa chỉ: Toà nhà Hokage, Làng Lá, Hoả Quốc.
            </span>
          </Typography.Paragraph>
          <Typography.Paragraph className='footer-contact-desc'>
            <span className='footer-contact-desc-icon'>
              <DevicePhoneMobileIcon className='icon' />
            </span>
            <span className='footer-contact-desc-text'>Số điện thoại: 0123456789</span>
          </Typography.Paragraph>
          <Typography.Paragraph className='footer-contact-desc'>
            <span className='footer-contact-desc-icon'>
              <EnvelopeIcon className='icon' />
            </span>
            <span className='footer-contact-desc-text'>Email: support@bloomstore.com</span>
          </Typography.Paragraph>
        </div>
      </div>
      <Divider />
      <Typography.Paragraph className='footer-copy-right txt-center'>
        © 2023 - Bản quyền thuộc về Công ty TNHH BLOOM
      </Typography.Paragraph>
    </Layout.Footer>
  )
}

export default Footer
