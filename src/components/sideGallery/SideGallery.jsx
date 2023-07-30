import styles from './sideGallery.module.scss';
import { useState } from 'react';
import NewNote from '../../assets/image/new-note.png';
import Folder from '../../assets/image/folder.png';
import LabelBlue from '../../assets/image/labelBlue.png';
import LabelOrange from '../../assets/image/labelOrange.png';
import LabelGreen from '../../assets/image/labelGreen.png';
import LabelPurple from '../../assets/image/labelPurple.png';
import Add from '../../assets/image/add.png';
import { Label } from '../label/Label';

export function SideGallery() {
  const [activeFolder, setActiveFolder] = useState('');
  const foldersArray = [
    { id: '1', name: 'All Notes', number: '43' },
    { id: '2', name: 'Design', number: '23' },
    { id: '3', name: 'Code Blocks', number: '15' },
    { id: '4', name: 'Drafts', number: '18' },
    { id: '5', name: 'People Review', number: '21' },
    { id: '6', name: 'Social', number: '43' },
    { id: '7', name: 'Labels', number: '36' },
    { id: '8', name: 'My Notes', number: '29' },
  ];

  const labelArray = [
    { id: '1', image: `${LabelBlue}`, name: 'Notes' },
    { id: '2', image: `${LabelOrange}`, name: 'Change Notes' },
    { id: '3', image: `${LabelGreen}`, name: 'From Family' },
    { id: '4', image: `${LabelPurple}`, name: 'Imagium' },
    { id: '5', image: `${LabelBlue}`, name: 'Work' },
    { id: '6', image: `${Add}`, name: 'New Label' },
  ];

  const labels = labelArray.map((item) => (
    <Label key={item.id} title={item.name} image={item.image} />
  ));

  const folders = foldersArray.map((folder) => (
    <div key={folder.id} className={styles.side_folders__list}>
      <div className={styles.side_list__names}>
        <img className={styles.side_folders__pic} src={Folder} alt="folder" />
        <p className={styles.side_list__title}>{folder.name}</p>
      </div>

      <p className={styles.side_list__number}>{folder.number}</p>
    </div>
  ));
  return (
    <div className={styles.side}>
      <div className={styles.side_folders}>
        <div className={styles.side_folders__new}>
          <img
            className={styles.side_folders__pic}
            src={NewNote}
            alt="new note"
          />
          <p className={styles.side_folders__title}>New Note</p>
        </div>
        <div>{folders}</div>
        <Label image={Add} title="Add Folder" />
      </div>
      <div className={styles.side_labels}>{labels}</div>
    </div>
  );
}
