import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function Friends({ friends }) {
  return (
    <>
      <ul className={styles.cardsFrends}>
        {friends.map((friend) => {
          return (
            <li className={styles.cardFrend} key={friend.id}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
