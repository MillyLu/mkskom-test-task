import styles from './gallerySearchPanel.module.scss';
import { Button } from '../button/Button';
import Flex from '../../assets/image/flex.png';
import Grid from '../../assets/image/grid.png';
import Delete from '../../assets/image/delete.png';
import { Search } from '../search/Search';

export function GallerySearchPanel() {
  return (
    <div className={styles.search}>
      <div className={styles.search_btn}>
        <div className={styles.search_layout}>
          <Button name="search-left">
            <img alt="flex" src={Flex} />
          </Button>
          <Button name="search-right">
            <img alt="grid" src={Grid} />
          </Button>
        </div>
        <Button name="little">
          <img alt="delete" src={Delete} />
        </Button>
      </div>
      <Search />
    </div>
  );
}
