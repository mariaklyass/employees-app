import { Icon } from "../components/Icon";

import { useAppState } from "../hooks/useAppState";
import classes from "./SearchModule.module.css";

export function SearchModule() {
  const search = useAppState((state) => state.search);
  const setSearch = useAppState((state) => state.setSearch);

  return (
    <div className={classes.search}>
      <Icon name="search" />
      <input
        className={classes.search__input}
        type="text"
        placeholder="Search by name or tag..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}
