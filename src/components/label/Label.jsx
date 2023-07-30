import styles from './label.module.scss';

export function Label({ title, image }) {
  return (
    <div className={styles.label}>
      <img src={image} alt={title} />
      <p className={styles.label_title}>{title}</p>
    </div>
  );
}
