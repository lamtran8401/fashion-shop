import CreateProductDrawer from '@/features/admin/components/CreateProductDrawer'
import useToggle from '@/hooks/useToggle'
import { productService } from '@/services/product.service'
import toCurrency from '@/utils/currency'
import toTableData from '@/utils/product'
import { Button, Skeleton, Table, Tag, Typography } from 'antd'
import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import './AdminProducts.scss'

const columns = [
  {
    title: 'ID',
    dataIndex: 'detailId',
    key: 'id',
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
    render: price => <Typography.Text>{toCurrency(price)}</Typography.Text>,
  },
  {
    title: 'Tuỳ chọn',
    dataIndex: 'options',
    key: 'options',
    render: (_, record) => {
      return (
        <>
          <Tag className='table-option' color='purple'>
            {record.options.color}
          </Tag>
          <Tag className='table-option' color='cyan'>
            {record.options.size}
          </Tag>
        </>
      )
    },
  },
  {
    title: 'Danh mục',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Thương hiệu',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Kho',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'isDeleted',
    key: 'isDeleted',
    render: isVisible => {
      return !isVisible ? <Tag color='green'>Hiển thị</Tag> : <Tag color='red'>Ẩn</Tag>
    },
  },
]

const AdminProducts = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [isToggle, toggleOn, toggleOff] = useToggle()

  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery({
    queryKey: 'products',
    queryFn: () => productService.getList(),
  })

  if (isLoading) return <Skeleton active />

  if (isError) return <Typography.Text type='danger'>Lỗi khi tải dữ liệu</Typography.Text>

  const handleDelete = async () => {
    await productService.deleteDetailsById(selectedRowKeys)
    queryClient.invalidateQueries('products')
  }

  const handleCreateProduct = () => {
    toggleOn()
  }

  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <div className='admin-products'>
      <div className='admin-products__header'>
        <Typography.Title level={3}>Sản phẩm</Typography.Title>
      </div>
      <div className='admin-products__actions'>
        <Button danger onClick={handleDelete} disabled={selectedRowKeys.length < 1}>
          Ẩn sản phẩm
        </Button>
        <Button type='primary' onClick={handleCreateProduct}>
          Thêm sản phẩm
        </Button>
      </div>
      <div className='admin-products__body'>
        <Table
          rowSelection={rowSelection}
          dataSource={toTableData(data)}
          columns={columns}
          rowKey={product => {
            return product.detailId
          }}
          pagination={{
            pageSize: 12,
            position: ['bottomRight'],
            size: 'small',
          }}
        />
      </div>
      <CreateProductDrawer visible={isToggle} onClose={toggleOff} />
    </div>
  )
}

export default AdminProducts
