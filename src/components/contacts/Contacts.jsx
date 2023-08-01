import styles from './contacts.module.scss';

import { contactsArray } from '../../constants';

export function Contacts() {
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
