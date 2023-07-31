import styles from './userInfo.module.scss';
import User from '../../assets/image/user.png';

export function UserInfo() {
  return (
    <div className={styles.userInfo__user}>
      <img className={styles.userInfo__avatar} alt="avatar" src={User} />
      <p className={styles.userInfo__name}>Clayton Santos</p>
    </div>
  );
}
