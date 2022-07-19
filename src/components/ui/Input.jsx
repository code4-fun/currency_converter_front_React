import React from 'react';

const Input = ({additionalClasses, ...props}) => {
  return (
      <input className={[additionalClasses, 'form-control'].join(' ')} {...props} />
  );
};

export default Input;