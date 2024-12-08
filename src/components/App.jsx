import "./App.css";
import Profile from "./profile/profile";
import userData from "../userData.json";
import friendsData from "../friendsData.json";
import FriendList from "./friend-list/FriendList";
import transactions from "../transations.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
