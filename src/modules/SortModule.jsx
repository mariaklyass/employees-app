import { Radio } from "../components/Radio";

import { SortOption } from "../data/SortOption";
import { useAppState } from "../hooks/useAppState";

export function SortModule({ onSort }) {
  const sortBy = useAppState((state) => state.sortBy);
  const setSortBy = useAppState((state) => state.setSortBy);

  return (
    <Radio
      name="sort"
      options={[
        { value: SortOption.Alphabet, label: "By alphabet" },
        { value: SortOption.Birthday, label: "By date of birth" },
      ]}
      value={sortBy}
      onChange={(v) => {
        setSortBy(v);
        onSort && onSort(v);
      }}
    />
  );
}
