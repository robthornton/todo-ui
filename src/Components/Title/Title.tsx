import React from 'react';

export interface TitleProps {
  text: string;
}

export function Title({text}: TitleProps): JSX.Element {
  return <h1>{text}</h1>;
}
