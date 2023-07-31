import styles from './galleryContent.module.scss';
import { SideGallery } from '../sideGallery/SideGallery';
import { GallerySearchPanel } from '../gallerySearchPanel/GallerySearchPanel';
import { Gallery } from '../gallery/Gallery';
import { useState } from 'react';

export function GalleryContent() {
  const [layout, setLayout] = useState('flex');

  return (
    <div className={styles.gallery_content}>
      <SideGallery />
      <div className={styles.gallery_main}>
        <GallerySearchPanel setLayout={setLayout} />
        <Gallery layout={layout} />
      </div>
    </div>
  );
}
