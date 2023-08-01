import styles from './dashboard.module.scss';
import { useState } from 'react';
import { itemsArray } from '../../constants';

export function DashboardTable() {
  const [active, setActive] = useState('');

  const items = itemsArray.map((item) => (
    <div
      className={
        active === item.name ? styles.table_item_active : styles.table_item
      }
      key={item.id}
    >
      <img
        className={styles.table_item__img}
        src={item.image}
        alt={item.name}
      />
      <p className={styles.table_item__title}>{item.name}</p>
    </div>
  ));

  return <div className={styles.table}>{items}</div>;
}
