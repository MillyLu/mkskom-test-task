import styles from './galleryContent.module.scss';
import { SideGallery } from '../sideGallery/SideGallery';
import { GallerySearchPanel } from '../gallerySearchPanel/GallerySearchPanel';

export function GalleryContent() {
  return (
    <div className={styles.gallery_content}>
      <SideGallery />
      <div className={styles.gallery_main}>
        <GallerySearchPanel />
      </div>
    </div>
  );
}
