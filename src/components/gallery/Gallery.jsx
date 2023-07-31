import styles from './gallery.module.scss';
import { useEffect, useState } from 'react';
import { GalleryItem } from '../galleryItem/GalleryItem';

export function Gallery({ layout }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums/2/photos?_limit=5'
      );
      const data = await response.json();
      setPhotos(data);
    };
    getPhotos();
    console.log(photos);
  }, []);

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
          />
        ))}
      </div>
    </>
  );
}
