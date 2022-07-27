import React from 'react';

const Select = ({additionalClasses, options = [], selectedOption, onChange, isDisabled}) => {
  return (
      <div>
        <select
            className={[additionalClasses, 'form-control'].join(' ')}
            value={selectedOption}
            onChange={event => onChange(event.target.value)}
            disabled={isDisabled}>
          {
            options.map(item =>
                <option
                    value={item.value}
                    disabled={item.disabled}
                    key={item.value}>
                  {item.value}
                </option>)
          }
        </select>
      </div>
  );
};

export default Select;