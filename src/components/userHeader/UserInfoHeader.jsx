import '../../App.scss';
import { Button } from '../button/Button';
import User from '../../assets/image/user.png';
import Notification from '../../assets/image/notification.png';
import Close from '../../assets/image/close.png';

export function UserInfoHeader() {
  return (
    <div className="header_userInfo">
      <div className="header_userInfo__user">
        <img className="header_userInfo__avatar" alt="avatar" src={User} />
        <p className="header_userInfo__name">Clayton Santos</p>
      </div>
      <div className="header_userInfo__btns">
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
