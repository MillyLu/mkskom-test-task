import styles from './button.module.scss';

export function Button({ children, name, clickAction }) {
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
    </button>
  );
}
