import '../../App.scss';
import Nav1 from '../../assets/image/nav1.png';
import Nav2 from '../../assets/image/nav2.png';
import Nav3 from '../../assets/image/nav3.png';
import Nav4 from '../../assets/image/nav4.png';
import Nav5 from '../../assets/image/nav5.png';
import Nav6 from '../../assets/image/nav6.png';
import Avatar1 from '../../assets/image/Avatar 1.png';
import Avatar2 from '../../assets/image/Avatar 2.png';
import Avatar3 from '../../assets/image/Avatar 3.png';
import Avatar4 from '../../assets/image/Avatar 4.png';
import Add from '../../assets/image/add.png';

import { Button } from '../button/Button';

export function SideNav() {
  const buttonsArray = [
    { id: '1', image: `${Nav1}` },
    { id: '2', image: `${Nav2}` },
    { id: '3', image: `${Nav3}` },
    { id: '4', image: `${Nav4}` },
    { id: '5', image: `${Nav5}` },
    { id: '6', image: `${Nav6}` },
  ];

  const avatarArray = [
    { id: '1', image: `${Avatar1}` },
    { id: '2', image: `${Avatar2}` },
    { id: '3', image: `${Avatar3}` },
    { id: '4', image: `${Avatar4}` },
  ];

  const buttons = buttonsArray.map((button) => (
    <Button key={button.id}>
      <img alt="nav buttons" src={button.image} />
    </Button>
  ));

  const users = avatarArray.map((avatar) => (
    <img
      className="sidenav_users__link"
      key={avatar.id}
      alt="user"
      src={avatar.image}
    />
  ));
  return (
    <section className="sidenav">
      <div className="sidenav_links">{buttons}</div>
      <div className="sidenav_users">
        {users}
        <Button>
          <img alt="add" src={Add} />
        </Button>
      </div>
    </section>
  );
}
