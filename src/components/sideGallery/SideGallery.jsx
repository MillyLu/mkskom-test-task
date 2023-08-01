import styles from './sideGallery.module.scss';
import { NewNote } from '../newNote/NewNote';
import { Folder } from '../folder/Folder';
import Add from '../../assets/image/add.png';
import { Label } from '../label/Label';
import { useState } from 'react';
import { foldersArray } from '../../constants';
import { labelArray } from '../../constants';

export function SideGallery() {
  const [activeFolder, setActiveFolder] = useState('All Notes');

  const labels = labelArray.map((item) => (
    <Label key={item.id} title={item.name} image={item.image} />
  ));

  const folders = foldersArray.map((folder) => (
    <Folder
      activeFolder={activeFolder}
      key={folder.id}
      name={folder.name}
      number={folder.number}
      setActiveFolder={setActiveFolder}
    />
  ));

  return (
    <div className={styles.side}>
      <div className={styles.side_folders}>
        <NewNote />
        <div className={styles.side_folders__list}>{folders}</div>
        <Label image={Add} title="Add Folder" />
      </div>
      <div className={styles.side_labels}>
        <h4 className={styles.side_labels__title}>Labels</h4>
        {labels}
      </div>
    </div>
  );
}
