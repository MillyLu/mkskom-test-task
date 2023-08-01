import styles from './dashboard.module.scss';
import { useState } from 'react';
import { itemsArray } from '../../constants';
import { ReactComponent as Status } from '../../assets/image/Status.svg';

export function DashboardTable() {
  const [active, setActive] = useState('Notes');

  const items = itemsArray.map((item) => (
    <div
      className={
        active === item.name ? styles.table_item_active : styles.table_item
      }
      key={item.id}
      onClick={() => setActive(item.name)}
    >
      <img
        className={styles.table_item__img}
        src={item.image}
        alt={item.name}
      />
      <p className={styles.table_item__title}>{item.name}</p>
      {active === item.name && (
        <span className={styles.dashboard_active}>
          <Status className={styles.orange} />
        </span>
      )}
    </div>
  ));

  return <div className={styles.table}>{items}</div>;
}
