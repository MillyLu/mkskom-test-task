import styles from './search.module.scss';
import SearchPng from '../../assets/image/searchHeader.png';
import SearchGallery from '../../assets/image/loupe.png';
import { useState } from 'react';

export function Search({ name, setAlbum }) {
  const [inputValue, setInputValue] = useState();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setAlbum(inputValue);
      }}
      className={
        name === 'header' ? styles.header_search : styles.gallery_search
      }
    >
      <img
        alt="loupe"
        src={name === 'header' ? SearchPng : SearchGallery}
        className={
          name === 'header'
            ? styles.header_search__icon
            : styles.gallery_search__icon
        }
      />

      <input
        className={
          name === 'header'
            ? styles.header_search__input
            : styles.gallery_search__input
        }
        onChange={(event) => setInputValue(event.target.value)}
        type="number"
        min={1}
        max={100}
        placeholder={
          name === 'header' ? 'Search Transactions and Documents' : 'Search'
        }
      />
      <span>
        <input
          type="submit"
          value=""
          className={
            name === 'header'
              ? styles.header_search__btn
              : styles.gallery_search__btn
          }
        />
      </span>
    </form>
  );
}
