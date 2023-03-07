const toCurrency = (value, currency = 'VND') => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  })
  return formatter.format(value)
}

export default toCurrency
