import '../../App.scss';
import More from '../../assets/image/more.png';

export function NavMenu() {
  const menuItems = [
    { id: '1', name: 'Dashboard' },
    { id: '2', name: 'About Us' },
    { id: '3', name: 'News' },
    { id: '4', name: 'User Policy' },
    { id: '5', name: 'Contacts' },
  ];

  const items = menuItems.map((item) => (
    <a className="header_nav__links" key={item.id} href="#">
      {item.name}
    </a>
  ));
  return (
    <div className="header_nav">
      {items}
      <button className="header_nav__btn">
        {' '}
        <img src={More}></img>{' '}
      </button>
    </div>
  );
}
