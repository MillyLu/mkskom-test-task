import styles from './galleryContent.module.scss';
import { SideGallery } from '../sideGallery/SideGallery';

export function GalleryContent() {
  return (
    <div className={styles.gallery_content}>
      <SideGallery />
    </div>
  );
}
