import styles from './navmenu.module.scss';
import More from '../../assets/image/more.png';
import { menuItems } from '../../constants';

export function NavMenu() {
  const items = menuItems.map((item) => (
    <a className={styles.nav_links} key={item.id} href="#">
      {item.name}
    </a>
  ));
  return (
    <div className={styles.nav}>
      {items}
      <button className={styles.nav_btn}>
        {' '}
        <img alt="show more" src={More}></img>{' '}
      </button>
    </div>
  );
}
