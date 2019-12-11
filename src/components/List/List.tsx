import React from 'react';

type ItemRenderer = (item: any) => React.ReactElement;

type ListProps = {
  count: number;
  itemRenderer: ItemRenderer;
};

export function List({count, itemRenderer}: ListProps): React.ReactElement {
  return (
    <ul>
      {Array(count)
        .fill(null)
        .map((_, i) => itemRenderer(i))}
    </ul>
  );
}
