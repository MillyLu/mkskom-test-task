import styles from './button.module.scss';
import { ReactComponent as Status } from '../../assets/image/Status.svg';

export function Button({ children, name, clickAction, status, color }) {
  return (
    <button
      onClick={clickAction}
      className={
        name === 'search-right'
          ? styles.button_search__right
          : name === 'search-left'
          ? styles.button_search__left
          : name === 'little'
          ? styles.button_little
          : styles.button
      }
    >
      {children}
      {status === 'active' && (
        <span className={styles.button_active}>
          <Status className={color === 'orange' ? styles.orange : ''} />
        </span>
      )}
    </button>
  );
}
