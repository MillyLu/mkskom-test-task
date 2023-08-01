import styles from './gallerySearchPanel.module.scss';
import { Button } from '../button/Button';
import Flex from '../../assets/image/flex.png';
import Grid from '../../assets/image/grid.png';
import Delete from '../../assets/image/delete.png';
import Menu from '../../assets/image/Icon.png';
import { Search } from '../search/Search';
import Loupe from '../../assets/image/loupe.png';

export function GallerySearchPanel({ setLayout }) {
  return (
    <div className={styles.search}>
      <div className={styles.search_btn}>
        <div className={styles.search_layout}>
          <div className={styles.search_layout__mobile}>
            <Button name="little">
              <img src={Menu} alt="menu_button" />
            </Button>
          </div>
          <Button name="search-left" clickAction={() => setLayout('flex')}>
            <img alt="flex" src={Flex} />
          </Button>
          <Button name="search-right" clickAction={() => setLayout('grid')}>
            <img alt="grid" src={Grid} />
          </Button>
        </div>
        <Button name="little">
          <img alt="delete" src={Delete} />
        </Button>
      </div>

      <div className={styles.search_site}>
        <Search />
      </div>
      <div className={styles.search_mobile}>
        <Button name="little">
          <img alt="search" src={Loupe} />
        </Button>
      </div>
    </div>
  );
}
