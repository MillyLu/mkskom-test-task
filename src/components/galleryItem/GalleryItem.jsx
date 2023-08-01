import styles from './galleryItem.module.scss';

export function GalleryItem({ image, title, date, layout }) {
  return (
    <div
      className={layout === 'flex' ? styles.gallery_item : styles.gallery_grid}
    >
      <div
        className={
          layout === 'flex'
            ? styles.gallery_item__border
            : styles.gallery_grid__border
        }
      >
        <img
          className={
            layout === 'flex'
              ? styles.gallery_item__img
              : styles.gallery_grid__img
          }
          src={image}
          alt={title}
        />
      </div>

      <div className={styles.gallery_item__description}>
        <h4 className={styles.gallery_item__title}>{title}</h4>
        <p className={styles.gallery_item__date}>{date}</p>
      </div>
    </div>
  );
}
