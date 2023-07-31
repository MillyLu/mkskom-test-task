import styles from './folder.module.scss';
import FolderPic from '../../assets/image/folder.png';

export function Folder({ key, name, number, activeFolder, setActiveFolder }) {
  return (
    <div
      onClick={() => setActiveFolder(name)}
      key={key}
      className={
        activeFolder === name ? styles.folder_list_active : styles.folder_list
      }
    >
      <div className={styles.folder_list__names}>
        <img className={styles.folder_list__pic} src={FolderPic} alt="folder" />
        <p className={styles.folder_list__title}>{name}</p>
      </div>

      <p className={styles.folder_list__number}>{number}</p>
    </div>
  );
}
