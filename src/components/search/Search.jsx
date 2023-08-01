import styles from './search.module.scss';
import SearchPng from '../../assets/image/searchHeader.png';
import SearchGallery from '../../assets/image/loupe.png';
import { useState } from 'react';

export function Search({ name, setAlbum }) {
  //заменила html-валидатор, т.к. он выдает alert //

  const [inputValue, setInputValue] = useState();
  const [error, setError] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!error) {
          if (!inputValue) {
            setAlbum(1);
          } else {
            setAlbum(inputValue);
          }
        }
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
      {name === 'header' && (
        <input
          onKeyDown={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
          className={styles.header_search__input}
          onChange={(event) => {
            const target = event.target.value;
            if (/^\d*$/.test(target)) {
              setInputValue(target);
              setError('');
            } else {
              setError('Only numbers 1 - 100');
            }
          }}
          type="search"
          min={1}
          max={100}
          placeholder={
            name === 'header' ? 'Search Transactions and Documents' : 'Search'
          }
        />
      )}
      {error && <span className={styles.search_error}>{error}</span>}
      {name !== 'header' && (
        <input
          className={styles.gallery_search__input}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          type="text"
          placeholder={
            name === 'header' ? 'Search Transactions and Documents' : 'Search'
          }
        />
      )}

      <span
        className={
          name === 'header'
            ? styles.header_search__span
            : styles.gallery_search__span
        }
      >
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
