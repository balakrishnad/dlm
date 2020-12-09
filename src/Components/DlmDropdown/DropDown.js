import React, { useState } from 'react'
import './DropDown.css'

const getSelectedValue = (options, id) => {
  return options ? options.find((o) => o.id === id) : null
}

export default ({
  id, onChange, options = [], placeholder = 'Select',
}) => {

  const [selectedValue, setSelectedValue] = useState(getSelectedValue(options, id) ? getSelectedValue(options, id).value : '')
  const [showDropdownValue, setShowDropdownValue] = useState(false)
  const getPlaceholder = placeholder
  const getMenuItems = options

  const handleClick = () => {
    setShowDropdownValue(!showDropdownValue)
  }

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  const handleBlur = (e) => {
    const { currentTarget } = e

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowDropdownValue(false)
      }
    }, 200)
  }

  const handleSelectItem = (e, id) => {
    const selected = getSelectedValue(options, id);
    setSelectedValue(selected.value);
    setShowDropdownValue(!showDropdownValue);
    if (onChange) {
      onChange({ target: { value: selected } });
    }
  }


  return (
    <div className="dlm-dropdown" onBlur={handleBlur}>
      <div className="dlm-dropdown-input" onClick={handleClick}>
        <input
          type="text"
          name="droptxt"
          placeholder={getPlaceholder}
          value={selectedValue}
          onChange={onChange || handleChange}
          autocomplete="off"
        />
      </div>
      {showDropdownValue && (
        <div className="dlm-dropdown-option-container">
          <ul className="dlm-dropdown-option-list">
            {getMenuItems.map(({ id, value }, index) => {
              return <li
                key={index}
                className="dlm-dropdown-option"
                onClick={(e) => {
                  handleSelectItem(e, id)
                }
                }
                value={id}
              >
                {value}
              </li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
