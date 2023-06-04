import useNotify from '@/hooks/useNotify'
import { productService } from '@/services/product.service'
import {
  ArrowUpTrayIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Button, Drawer, Form, Input, InputNumber, Modal, Space, Upload } from 'antd'
import { useState } from 'react'
import { useMutation } from 'react-query'
import './CreateProductDrawer.scss'

const CreateProductDrawer = ({ visible, onClose }) => {
  const { notifyError, notifySuccess } = useNotify()
  const [fileList, setFileList] = useState([])
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  const handleCancelModelImage = () => {
    setPreviewOpen(false)
  }

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await readURL(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const readURL = file => {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
    })
  }
  const handleChangeImage = info => {
    if (isUpload(info)) {
      info.file.status = 'done'
      setFileList(info.fileList)
      console.log(fileList)
    }
  }

  const isUpload = info => {
    const isImage = info.file.type.startsWith('image/')
    const isLt2M = info.file.size / 1024 / 1024 < 2
    if (!isImage) {
      notifyError('Chỉ được upload file ảnh!')
      return false
    }
    if (!isLt2M) {
      notifyError('Ảnh có kích thức nhỏ hơn 2MB!')
      return false
    }
    return true
  }

  const mutation = useMutation({
    mutationKey: 'create-product',
    mutationFn: payload => productService.create(payload),
  })

  const handleCreateProduct = values => {
    values.files = values?.files?.fileList.map(file => file.originFileObj)
    const data = {}
    values.productDetails.forEach((detail, index) => {
      data[`productDetails[${index}].color`] = detail.color
      data[`productDetails[${index}].size`] = detail.size
      data[`productDetails[${index}].stock`] = detail.stock
    })
    data[`product.name`] = values.name
    data[`product.description`] = values.description
    data[`product.price`] = values.price
    data[`product.category`] = values.category
    data[`product.brand`] = values.brand

    values.files.forEach((file, index) => {
      data[`files[${index}]`] = file
    })

    mutation.mutate(data, {
      onSuccess: () => {
        onClose()
        notifySuccess('Tạo sản phẩm thành công!')
      },
    })
  }

  return (
    <Drawer
      title='Tạo sản phẩm'
      placement='right'
      closeIcon={<XMarkIcon className='cart__close-icon' />}
      onClose={onClose}
      open={visible}
      width={500}>
      <div className='create-product-drawer'>
        <Form layout='vertical' className='form product-drawer' onFinish={handleCreateProduct}>
          <Form.Item
            name='name'
            label='Tên sản phẩm'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên sản phẩm!',
              },
            ]}>
            <Input placeholder='Nhập tên của sản phẩm' />
          </Form.Item>
          <Form.Item
            name='price'
            label='Giá'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập giá sản phẩm!',
              },
              {
                type: 'number',
                min: 0,
                message: 'Giá phải lớn hơn 0!',
              },
            ]}>
            <InputNumber placeholder='Nhập giá của sản phẩm' style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name='description'
            label='Mô tả'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mô tả của sản phẩm!',
              },
            ]}>
            <Input.TextArea placeholder='Nhập mô tả của sản phẩm' />
          </Form.Item>
          <Form.Item
            name='category'
            label='Danh mục'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập danh mục của sản phẩm!',
              },
            ]}>
            <Input placeholder='Nhập danh mục của sản phẩm' />
          </Form.Item>
          <Form.Item
            name='brand'
            label='Thương hiệu'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập thương hiệu của sản phẩm!',
              },
            ]}>
            <Input placeholder='Nhập thương hiệu của sản phẩm' />
          </Form.Item>
          <Form.List name='productDetails'>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: 'flex', marginBottom: 8, alignItems: 'center' }}>
                    <Form.Item
                      {...restField}
                      name={[name, 'color']}
                      rules={[{ required: true, message: 'Vui lòng nhập màu sắc sản phẩm' }]}>
                      <Input placeholder='Nhập màu sắc' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'size']}
                      rules={[{ required: true, message: 'Vui lòng nhập kích thước sản phẩm' }]}>
                      <Input placeholder='Nhập kích thước' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'stock']}
                      rules={[
                        { required: true, message: 'Vui lòng nhập số lượng kho của sản phẩm' },
                      ]}>
                      <InputNumber placeholder='Nhập số lượng trong kho' />
                    </Form.Item>
                    <MinusCircleIcon className='icon' onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    className='btn-add-options'
                    type='dashed'
                    onClick={() => add()}
                    block
                    icon={<PlusCircleIcon className='icon' />}>
                    Thêm Phiên bản
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            name='files'
            label='Hình ảnh'
            rules={[
              {
                required: true,
                message: 'Vui lòng thêm hình ảnh của sản phẩm!',
              },
            ]}>
            <Upload
              name='files'
              fileList={fileList}
              onChange={handleChangeImage}
              onPreview={handlePreview}>
              <Button className='btn-upload' icon={<ArrowUpTrayIcon className='icon' />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Button type='primary' size='large' htmlType='submit' className='btn-submit'>
            Tạo sản phẩm
          </Button>
        </Form>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancelModelImage}>
          <img
            alt='example'
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>
      </div>
    </Drawer>
  )
}

export default CreateProductDrawer
