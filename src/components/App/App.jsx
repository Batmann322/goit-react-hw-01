import userData from "../../userData.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import css from "./App.module.css";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
