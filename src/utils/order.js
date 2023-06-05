const toCheckoutObject = orderItems => {
  const items = orderItems?.map(item => ({
    color: item.detail.color,
    detailId: item.detail.id,
    quantity: item.quantity,
    id: item.id,
    images: item.product.images,
    name: item.product.name,
    price: item.price,
    size: item.detail.size,
    brand: item.product.brand,
    category: item.product.category,
  }))

  return items
}

export default toCheckoutObject
