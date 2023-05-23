import './Dropdown.scss'

const Dropdown = ({ items = [], children }) => {
  return (
    <div className='dropdown'>
      <div className='dropdown-trigger'>{children}</div>
      <ul className='dropdown-menu'>
        {items.map(item => (
          <li className='dropdown-item' key={item.key}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
