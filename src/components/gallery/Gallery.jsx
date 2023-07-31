import styles from './gallery.module.scss';
import { useEffect, useState } from 'react';
import { GalleryItem } from '../galleryItem/GalleryItem';
import { getPhotos } from '../../apiServices';

export function Gallery({ layout, album }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let data;
    if (layout === 'flex') {
      console.log(album);
      data = getPhotos(album, 16).then((data) => setPhotos(data));
    }
    if (layout === 'grid') {
      console.log(album);
      data = getPhotos(album, 5).then((data) => setPhotos(data));
    }
  }, [album, layout]);

  return (
    <>
      <div
        className={
          layout === 'flex' ? styles.gallery_flex : styles.gallery_none
        }
      >
        {photos.map((photo) => (
          <GalleryItem
            key={photo.id}
            image={photo.url}
            title={photo.title}
            date={photo.id}
            layout={layout}
          />
        ))}
      </div>
      <div
        className={
          layout === 'grid' ? styles.gallery_grid : styles.gallery_none
        }
      >
        {photos.map((photo) => (
          <GalleryItem
            key={photo.id}
            image={photo.url}
            title={photo.title}
            date={photo.id}
            layout={layout}
          />
        ))}
      </div>
    </>
  );
}
