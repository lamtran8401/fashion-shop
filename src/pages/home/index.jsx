import wallpaper0 from '@/assets/images/wallpaper-0.jpeg'
import wallpaper1 from '@/assets/images/wallpaper-1.avif'
import wallpaper2 from '@/assets/images/wallpaper-main.jpeg'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
  const navigate = useNavigate()

  const handleExplore = () => {
    navigate('/product')
  }

  return (
    <div className='home-page'>
      <div className='image-content'>
        <img className='image' src={wallpaper1} alt='Main Wallpaper' />
        <div className='image'>
          <img className='image' src={wallpaper0} alt='Main Wallpaper' />
          <div className='title-content'>
            <Typography.Title className='title'>
              Tìm kiếm những trải nghiệm tuyệt vời
            </Typography.Title>
            <Typography.Paragraph className='description'>
              Hãy khám phá những trải nghiệm tuyệt vời mà bạn chưa từng biết.
            </Typography.Paragraph>
            <Button type='primary' size='large' onClick={handleExplore}>
              KHÁM PHÁ NGAY
            </Button>
          </div>
        </div>
        <img className='image' src={wallpaper2} alt='Main Wallpaper' />
      </div>
    </div>
  )
}

export default HomePage
