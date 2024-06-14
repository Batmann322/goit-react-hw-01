import css from "./Profile.module.css";

export default function OfficerProfile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <div className={css.section}>
          <p className={css.name}>{name}</p>
          <p className={css.text}>@{tag}</p>
          <p className={css.text}>{location}</p>
        </div>
      </div>

      <ul className={css.textList}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
