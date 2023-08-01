import styles from './sidenav.module.scss';
import Add from '../../assets/image/add.png';
import { buttonsArray } from '../../constants';
import { avatarArray } from '../../constants';
import { useState } from 'react';
import { Button } from '../button/Button';
import { ReactComponent as Status } from '../../assets/image/Status.svg';

export function SideNav() {
  const [active] = useState('3'); //setActive прописать если есть логика получения уведомлений
  const [activeAvatar] = useState('1');
  const buttons = buttonsArray.map((button) => (
    <Button
      color={active === button.id ? 'orange' : ''}
      key={button.id}
      status={active === button.id ? 'active' : ''}
    >
      <img alt="nav buttons" src={button.image} />
    </Button>
  ));

  const users = avatarArray.map((avatar) => (
    <div key={avatar.id} className={styles.avatar_position}>
      <img
        className={styles.sidenav_users__link}
        alt="user"
        src={avatar.image}
      />
      {activeAvatar === avatar.id && (
        <span className={styles.avatar_active}>
          <Status className={styles.orange} />
        </span>
      )}
    </div>
  ));
  return (
    <section className={styles.sidenav}>
      <div className={styles.sidenav_links}>{buttons}</div>
      <div className={styles.sidenav_users}>
        {users}
        <Button>
          <img alt="add" src={Add} />
        </Button>
      </div>
    </section>
  );
}
