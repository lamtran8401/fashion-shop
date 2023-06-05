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

const orderNum = {
  PENDING: 0,
  DELIVERING: 1,
  DELIVERED: 2,
  CANCELED: 3,
}

const orderEnum = {
  PENDING: 'PENDING',
  DELIVERING: 'DELIVERING',
  DELIVERED: 'DELIVERED',
  CANCELED: 'CANCELED',
}

export { orderEnum, orderNum, orderStatus, orderStatusString }
