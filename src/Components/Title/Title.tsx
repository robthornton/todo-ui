import React from 'react';

export interface TitleProps {
  text: string;
}

function Title({text}: TitleProps): JSX.Element {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default Title;
