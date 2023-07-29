import '../../App.scss';
import { Button } from '../button/Button';
import User from '../../assets/image/userContent.png';
import MainAvatar from '../../assets/image/mainAvatar.png';
import More from '../../assets/image/more.png';
import { DashboardTable } from '../dashboard/Dashboard';

export function UserContent() {
  return (
    <div className="user">
      <div className="user_btns">
        <Button>
          <img alt="user" src={User} />
        </Button>
        <Button>
          <img alt="more" src={More} />
        </Button>
      </div>
      <div className="user_info">
        <img className="user_info__avatar" alt="avatar" src={MainAvatar} />
        <div className="user_info__about">
          <h5 className="user_info__name">Hello Alfred Bryant</h5>
          <a className="user_info__mail" href="mailto:adrain.nader@yahoo.com">
            adrain.nader@yahoo.com
          </a>
        </div>
      </div>
      <DashboardTable />
      <div className="user_contacts"></div>
    </div>
  );
}
