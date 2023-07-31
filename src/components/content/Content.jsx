import styles from './content.module.scss';

export function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}
