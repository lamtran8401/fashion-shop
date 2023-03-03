import { useEffect, useState, memo } from 'react'
import { useDebounce } from '../../hooks'
import './Search.scss'
import { Input } from 'antd'

const Search = ({ size = 'small', placeholder = 'Search...' }) => {
  const [searchValue, setSearchValue] = useState('')

  const debouncedValue = useDebounce(searchValue, 500)

  useEffect(() => {
    if (!debouncedValue.trim()) return
    console.log(debouncedValue)
  }, [debouncedValue])

  const handleChange = e => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ')) setSearchValue(searchValue)
  }

  const handlePressEnter = e => {
    const value = e.target.value
    if (value) console.log('enter:', value)
  }

  const handleSearch = value => {
    if (value) console.log('search:', value)
  }

  return (
    <div className='search-bar'>
      <Input.Search
        size={size}
        className='search-input'
        placeholder={placeholder}
        allowClear
        value={searchValue}
        onChange={handleChange}
        onPressEnter={handlePressEnter}
        onSearch={handleSearch}
      />
    </div>
  )
}

export default memo(Search)
