import React from 'react';
import styles from './Responsive.module.scss';

export function Responsive({ children }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}
