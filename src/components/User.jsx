import { getFormatDate } from "../utils/getFormatDate";
import { capitalize } from "../utils/capitalize";
import { Avatar } from "./Avatar";
import classes from "./User.module.css";

export function User({ user, displayBirthday = true }) {
  return (
    <article className={classes.user}>
      <div className={classes.profile}>
        <Avatar
          className={classes.avatar}
          url={user.avatarUrl}
          title={`${user.firstName} ${user.lastName}`}
        />
        <div>
          <header className={classes.personality}>
            <h4 className={classes.name}>
              {`${user.firstName} ${user.lastName}`}
            </h4>
            {user.userTag && <p className={classes.tag}>{user.userTag}</p>}
          </header>
          <p className={classes.position}>{capitalize(user.position)}</p>
        </div>
      </div>
      {displayBirthday && (
        <aside className={classes.birthday}>
          {getFormatDate(user.birthday)}
        </aside>
      )}
    </article>
  );
}
