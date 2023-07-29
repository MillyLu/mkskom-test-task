import '../../App.scss';
import { Button } from '../button/Button';
import Menu from '../../assets/image/Icon.png';
import { NavMenu } from '../nav-menu/NavMenu';
import { Search } from '../search/Search';
import { UserInfoHeader } from '../userHeader/UserInfoHeader';

function Header() {
  return (
    <header className="header">
      <div className="header_menu">
        <Button>
          <img src={Menu} alt="menu_button" />
        </Button>
        <h4 className="header_menu__title">Constructor</h4>
      </div>
      <NavMenu />
      <Search name="header" />
      <UserInfoHeader />
    </header>
  );
}

export default Header;
