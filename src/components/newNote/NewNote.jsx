import styles from './newNote.module.scss';
import NewNotePic from '../../assets/image/new-note.png';

export function NewNote() {
  return (
    <div className={styles.new}>
      <img className={styles.new_pic} src={NewNotePic} alt="new note" />
      <p className={styles.new_title}>New Note</p>
    </div>
  );
}
