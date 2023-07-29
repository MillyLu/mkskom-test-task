import '../../App.scss';
import SearchPng from '../../assets/image/searchHeader.png';
import SearchGallery from '../../assets/image/searchGallery.png';
import SearchBtn from '../../assets/image/searchBtn.png';

export function Search({ name }) {
  return (
    <div className={name === 'header' ? 'header_search' : 'gallery_search'}>
      <img
        alt="loupe"
        src={name === 'header' ? SearchPng : SearchGallery}
        className={
          name === 'header' ? 'header_search__icon' : 'gallery_search__icon'
        }
      />

      <input
        className={
          name === 'header' ? 'header_search__input' : 'gallery_search__input'
        }
        type="search"
        placeholder={
          name === 'header' ? 'Search Transactions and Documents' : 'Search'
        }
      />
      <button
        className={
          name === 'header' ? 'header_search__btn' : 'gallery_search__btn'
        }
      >
        <img alt="look for" src={SearchBtn} />
      </button>
    </div>
  );
}
