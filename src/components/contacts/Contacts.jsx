import styles from './contacts.module.scss';
import Phone from '../../assets/image/local_phone.png';
import Mail from '../../assets/image/mail.png';
import Reader from '../../assets/image/chrome_reader_mode.png';
import Telegrem from '../../assets/image/ic_telegram.png';
import Whatsapp from '../../assets/image/ic_whatsapp.png';

export function Contacts() {
  const contactsArray = [
    { id: '1', image: `${Phone}`, title: 'Phone' },
    { id: '2', image: `${Mail}`, title: 'Mail' },
    { id: '3', image: `${Reader}`, title: 'Reader' },
    { id: '4', image: `${Telegrem}`, title: 'Telegram' },
    { id: '5', image: `${Whatsapp}`, title: 'Whatsapp' },
  ];

  const contacts = contactsArray.map((item) => (
    <img
      className={styles.contact_item}
      src={item.image}
      alt={item.title}
      key={item.id}
    />
  ));

  return <div className={styles.contacts}>{contacts}</div>;
}
