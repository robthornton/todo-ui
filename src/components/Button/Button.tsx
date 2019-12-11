import React from 'react';

type ButtonProps = {
  label?: string;
  onClick?: () => any;
};

export function Button({label, onClick}: ButtonProps): React.ReactElement {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
