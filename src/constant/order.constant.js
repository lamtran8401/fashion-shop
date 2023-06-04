const orderStatus = {
  PENDING: 'processing',
  DELIVERING: 'default',
  DELIVERED: 'success',
  CANCELED: 'warning',
}

const orderStatusString = {
  PENDING: 'Đã tiếp nhận',
  DELIVERING: 'Đang giao',
  DELIVERED: 'Đã giao',
  CANCELED: 'Đã hủy',
}

export { orderStatus, orderStatusString }
