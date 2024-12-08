import clsx from "clsx";
import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={styles.imgFrend} src={avatar} alt="Avatar" width="48" />
      <p className={styles.nameFrend}>{name}</p>
      <p
        className={
          (styles.isOnline, clsx(isOnline ? styles.green : styles.red))
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
