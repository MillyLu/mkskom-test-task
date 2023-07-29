import '../../App.scss';
import { useState } from 'react';
import Dashboard from '../../assets/image/dashboard.png';
import Notes from '../../assets/image/note.png';
import Invoice from '../../assets/image/Invoice.png';
import Files from '../../assets/image/Files.png';
import Events from '../../assets/image/Event.png';
import Team from '../../assets/image/Team.png';
import Message from '../../assets/image/message.png';
import Settings from '../../assets/image/settings.png';

export function DashboardTable() {
  const [active, setActive] = useState('Notes');
  const itemsArray = [
    { id: '1', name: 'Dashboard', image: `${Dashboard}` },
    { id: '2', name: 'Notes', image: `${Notes}` },
    { id: '3', name: 'Invoice', image: `${Invoice}` },
    { id: '4', name: 'Files', image: `${Files}` },
    { id: '5', name: 'Events', image: `${Events}` },
    { id: '6', name: 'Teams', image: `${Team}` },
    { id: '7', name: 'Message', image: `${Message}` },
    { id: '8', name: 'Settings', image: `${Settings}` },
  ];

  const items = itemsArray.map((item) => (
    <div
      className={active === item.name ? 'table_item_active' : 'table_item'}
      key={item.id}
    >
      <img className="table_item__img" src={item.image} alt={item.name} />
      <p className="table_item__title">{item.name}</p>
    </div>
  ));

  return <div className="table">{items}</div>;
}
