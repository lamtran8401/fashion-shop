import DashboardCard from '@/features/admin/components/DashboardCard'
import { CubeIcon, Squares2X2Icon, TruckIcon } from '@heroicons/react/24/outline'
import { Typography } from 'antd'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import './AdminDashboard.scss'

const AdminDashboard = () => {
  const data = {
    products: [
      {
        title: 'Tổng sản phẩm',
        value: 1,
      },
      {
        title: 'Đã bán',
        value: 100,
      },
    ],
    orders: [
      {
        title: 'Đơn huỷ',
        value: 5,
      },
      {
        title: 'Đơn hoàn thành',
        value: 3,
      },
    ],
    delivery: [
      {
        title: 'Chờ vận chuyển',
        value: 2,
      },
      {
        title: 'Đang vận chuyển',
        value: 1,
      },
    ],
  }

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: 'Đơn hàng',
        },
        beginAtZero: true,
      },
    },
  }

  const labels = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 11',
    'Tháng 12',
  ]

  const dataChart = {
    labels,
    datasets: [
      {
        label: 'Đơn hoàn thành',
        data: labels.map(() => 2),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Đơn bị huỷ',
        data: labels.map(() => 4),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <div className='admin-dashboard'>
      <div className='admin-dashboard__header'>
        <Typography.Title level={3}>Tổng quan</Typography.Title>
      </div>
      <div className='admin-dashboard__body'>
        <div className='admin-dashboard__body__card'>
          <DashboardCard
            title='Sản phẩm'
            data={data.products}
            icon={<CubeIcon className='icon' />}
          />
          <DashboardCard
            title='Đơn hàng'
            data={data.orders}
            icon={<Squares2X2Icon className='icon' />}
          />
          <DashboardCard
            title='Vận chuyển'
            data={data.delivery}
            icon={<TruckIcon className='icon' />}
          />
        </div>
        <div className='admin-dashboard__body__chart'>
          <Typography.Title level={4}>Selling</Typography.Title>
          <Line options={options} data={dataChart} />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
