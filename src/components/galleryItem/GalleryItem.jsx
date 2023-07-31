import styles from './galleryItem.module.scss';

export function GalleryItem({ image, title, date }) {
  return (
    <div className={styles.gallery_item + styles.grid}>
      <img className={styles.gallery_item__img} src={image} alt={title} />
      <div className={styles.gallery_item__description}>
        <h4 className={styles.gallery_item__title}>{title}</h4>
        <p className={styles.gallery_item__date}>{date}</p>
      </div>
    </div>
  );
}
