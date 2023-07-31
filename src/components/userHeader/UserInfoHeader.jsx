import styles from './userInfoHeader.module.scss';
import { Button } from '../button/Button';
import { UserInfo } from '../userInfo/UserInfo';

import Notification from '../../assets/image/notification.png';
import Close from '../../assets/image/close.png';

export function UserInfoHeader() {
  return (
    <div className={styles.header_userInfo}>
      <UserInfo />
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
