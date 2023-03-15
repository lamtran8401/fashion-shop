import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { memo } from 'react'
import './Loading.scss'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loading = () => {
  return (
    <div className='loading'>
      <Spin indicator={antIcon} />
    </div>
  )
}

export default memo(Loading)
