const toTableData = products => {
  const tableData = []
  products.forEach(product => {
    const data = product?.productDetails.map(detail => ({
      id: product.id,
      name: product.name,
      price: detail.price,
      description: product.description,
      images: product.images,
      soldOut: product.soldOut,
      brand: product.brand,
      category: product.category,
      isVisible: product.isVisible,
      detailId: detail.id,
      options: {
        color: detail.color,
        size: detail.size,
      },
      stock: detail.stock,
      isDeleted: detail.isDeleted,
    }))

    tableData.push(...data)
  })

  return tableData
}

export default toTableData
