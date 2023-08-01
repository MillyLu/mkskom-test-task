import styles from './user.module.scss';
import MainAvatar from '../../assets/image/mainAvatar.png';

export function User() {
  return (
    <div className={styles.user_info}>
      <img className={styles.user_info__avatar} alt="avatar" src={MainAvatar} />
      <div className={styles.user_info__notification}>2</div>

      <div className={styles.user_info__about}>
        <h5 className={styles.user_info__name}>Hello Alfred Bryant</h5>
        <a
          className={styles.user_info__mail}
          href="mailto:adrain.nader@yahoo.com"
        >
          adrain.nader@yahoo.com
        </a>
      </div>
    </div>
  );
}
