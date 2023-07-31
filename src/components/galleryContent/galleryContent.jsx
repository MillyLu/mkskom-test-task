import styles from './galleryContent.module.scss';
import { SideGallery } from '../sideGallery/SideGallery';
import { GallerySearchPanel } from '../gallerySearchPanel/GallerySearchPanel';
import { Gallery } from '../gallery/Gallery';

export function GalleryContent() {
  return (
    <div className={styles.gallery_content}>
      <SideGallery />
      <div className={styles.gallery_main}>
        <GallerySearchPanel />
        <Gallery layout="flex" />
      </div>
    </div>
  );
}
