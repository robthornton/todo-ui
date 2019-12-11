import React from 'react';

import styles from './ListItem.module.css';

type ListItemProps = {};

export function ListItem({
  children
}: React.PropsWithChildren<ListItemProps>): React.ReactElement {
  return <li className={styles.item}>{children}</li>;
}
