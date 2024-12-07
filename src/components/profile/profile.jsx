import styles from "./profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.card}>
      <div className={styles.dataUser}>
        <img className={styles.avatarimg} src={avatar} />
        <h3 className={styles.name}>{username}</h3>
        <p className={styles.niklocation}>@{tag}</p>
        <p className={styles.niklocation}>{location}</p>
      </div>
      <ul className={styles.ulStats}>
        <li className={styles.liStats}>
          <span>Followers</span>
          <span className={stats.spanLi}>{stats.followers}</span>
        </li>
        <li className={styles.liStats}>
          <span>Views</span>
          <span className={stats.spanLi}>{stats.views}</span>
        </li>
        <li className={styles.liStats}>
          <span>Likes</span>
          <span className={stats.spanLi}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
