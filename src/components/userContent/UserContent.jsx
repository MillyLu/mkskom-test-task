import styles from './usercontent.module.scss';
import { Button } from '../button/Button';
import UserBtn from '../../assets/image/userContent.png';
import { User } from '../user/User';
import More from '../../assets/image/more.png';
import { DashboardTable } from '../dashboard/Dashboard';
import { Contacts } from '../contacts/Contacts';

export function UserContent() {
  return (
    <div className={styles.user}>
      <div className={styles.user_part}>
        <div className={styles.user_btns}>
          <Button>
            <img alt="user" src={UserBtn} />
          </Button>
          <Button>
            <img alt="more" src={More} />
          </Button>
        </div>
        <User />
        <DashboardTable />
      </div>
      <Contacts />
    </div>
  );
}
