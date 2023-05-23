import dayjs from 'dayjs'

const toDayjs = date => {
  const [day, month, year] = date.split('/')
  return dayjs(`${year}-${month}-${day}`)
}

export default toDayjs
