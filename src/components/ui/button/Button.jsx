import React from 'react';
import classes from './Button.module.scss'

const Button = ({additionalClasses, children, ...props}) => {
  return (
    <button
      {...props}
      className={[additionalClasses, classes.btn].join(' ')}>
      {children}
    </button>
  );
};
export default Button;