import clsx from "clsx";
import css from "./FriendProfile.module.css";

export default function FriendProfile({ friends: { avatar, name, isOnline } }) {
  const containerClsx = clsx(isOnline === true ? css.online : css.ofline);

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={containerClsx}>{isOnline === true ? "Online" : "Ofline"}</p>
    </div>
  );
}
