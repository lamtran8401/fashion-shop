import { Divider, Typography } from 'antd'
import './DashboardCard.scss'

const DashboardCard = ({ title, data = [], icon }) => {
  return (
    <div className='dashboard-card'>
      <div className='dashboard-card__header'>
        <div className='dashboard-card__header__icon'>{icon}</div>
        <Typography.Text className='dashboard-card__header__title'>{title}</Typography.Text>
      </div>
      <Divider />
      <div className='dashboard-card__body'>
        <div className='dashboard-card__body__data'>
          <Typography.Text className='dashboard-card__body__data__value'>
            {data?.[0]?.value}
          </Typography.Text>
          <Typography.Text className='dashboard-card__body__data__title'>
            {data?.[0]?.title}
          </Typography.Text>
        </div>
        <Divider type='vertical' />
        <div className='dashboard-card__body__data'>
          <Typography.Text className='dashboard-card__body__data__value'>
            {data?.[1]?.value}
          </Typography.Text>
          <Typography.Text className='dashboard-card__body__data__title'>
            {data?.[1]?.title}
          </Typography.Text>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
