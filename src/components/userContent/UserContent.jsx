import styles from './usercontent.module.scss';
import { Button } from '../button/Button';
import User from '../../assets/image/userContent.png';
import MainAvatar from '../../assets/image/mainAvatar.png';
import More from '../../assets/image/more.png';
import { DashboardTable } from '../dashboard/Dashboard';
import { Contacts } from '../contacts/Contacts';

export function UserContent() {
  return (
    <div className={styles.user}>
      <div className={styles.user_part}>
        <div className={styles.user_btns}>
          <Button>
            <img alt="user" src={User} />
          </Button>
          <Button>
            <img alt="more" src={More} />
          </Button>
        </div>
        <div className={styles.user_info}>
          <img
            className={styles.user_info__avatar}
            alt="avatar"
            src={MainAvatar}
          />
          <div className={styles.user_info__about}>
            <h5 className={styles.user_info__name}>Hello Alfred Bryant</h5>
            <a
              className={styles.user_info__mail}
              href="mailto:adrain.nader@yahoo.com"
            >
              adrain.nader@yahoo.com
            </a>
          </div>
        </div>
        <DashboardTable />
      </div>

      <Contacts />
    </div>
  );
}
