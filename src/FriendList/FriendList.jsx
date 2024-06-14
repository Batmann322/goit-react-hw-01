import FriendProfile from "../FriendProfile/FriendProfile";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendProfile friends={friend} />
        </li>
      ))}
    </ul>
  );
}
