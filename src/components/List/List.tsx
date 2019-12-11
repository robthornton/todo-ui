import React from 'react';
import styles from './List.module.css';

type ItemRenderer = (item: any) => React.ReactElement;

type ListProps = {
  count: number;
  itemRenderer: ItemRenderer;
};

export function List({count, itemRenderer}: ListProps): React.ReactElement {
  return (
    <ul className={styles.list}>
      {Array(count)
        .fill(null)
        .map((_, i) => itemRenderer(i))}
    </ul>
  );
}
