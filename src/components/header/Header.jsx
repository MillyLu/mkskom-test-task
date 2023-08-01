import styles from './header.module.scss';
import { Button } from '../button/Button';
import Menu from '../../assets/image/Icon.png';
import { NavMenu } from '../nav-menu/NavMenu';
import { Search } from '../search/Search';
import User from '../../assets/image/user.png';
import { UserInfoHeader } from '../userHeader/UserInfoHeader';

export function Header({ setAlbum }) {
  return (
    <header className={styles.header}>
      <div className={styles.header_menu}>
        <Button>
          <img src={Menu} alt="menu_button" />
        </Button>
        <h4 className={styles.header_menu__title}>Constructor</h4>
      </div>
      <div className={styles.header__site}>
        <NavMenu />
        <Search name="header" setAlbum={setAlbum} />
        <UserInfoHeader />
      </div>
      <div className={styles.header__mobile}>
        <Button>
          <img src={User} alt="user" />
        </Button>
      </div>
    </header>
  );
}
