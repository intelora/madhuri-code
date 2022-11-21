import React from 'react';

import './Button.css';

const Button = (props) => {
    const classes = 'card ' + props.className;
  return (
    <button
      type={props.type || 'button'}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;