import styles from './userInfoHeader.module.scss';
import { Button } from '../button/Button';
import User from '../../assets/image/user.png';
import Notification from '../../assets/image/notification.png';
import Close from '../../assets/image/close.png';

export function UserInfoHeader() {
  return (
    <div className={styles.header_userInfo}>
      <div className={styles.header_userInfo__user}>
        <img
          className={styles.header_userInfo__avatar}
          alt="avatar"
          src={User}
        />
        <p className={styles.header_userInfo__name}>Clayton Santos</p>
      </div>
      <div className={styles.header_userInfo__btns}>
        <Button>
          <img src={Notification} alt="notifications" />
        </Button>
        <Button>
          <img src={Close} alt="close" />
        </Button>
      </div>
    </div>
  );
}
