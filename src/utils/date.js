import dayjs from 'dayjs'

const toDayjs = date => {
  const [day, month, year] = date.split('/')
  return dayjs(`${year}-${month}-${day}`)
}

const toDateString = date => {
  const dateObj = dayjs(date)
  const day = dateObj.date()
  const month = dateObj.month() + 1
  const year = dateObj.year()
  const hours = dateObj.hour()
  const minutes = dateObj.minute()

  if (minutes < 10) return `${day}/${month}/${year} ${hours}:0${minutes}`
  return `${day}/${month}/${year} ${hours}:${minutes}`
}

export { toDateString }

export default toDayjs
