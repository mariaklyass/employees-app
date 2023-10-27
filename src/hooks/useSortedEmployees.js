import { useMemo } from "react";

export const useSortedEmployees = (data, sort) => {
  const sortedEmployees = useMemo(() => {
    if (sort) {
      return [...data].sort((employee1, employee2) => {
        switch (sort) {
          case "birthday":
            const date1 = new Date(employee1[sort]);
            const date2 = new Date(employee2[sort]);
            return date2 - date1;
          default:
            return employee1[sort].localeCompare(employee2[sort]);
        }
      });
    } else {
      return data;
    }
  }, [sort, data]);

  return sortedEmployees;
};

export const useEmployees = (data, sort, query) => {
  const sortedEmployees = useSortedEmployees(data, sort);

  const sortedAndSearchedEmployees = useMemo(() => {
    return sortedEmployees.filter((person) => {
      const { firstName, lastName, userTag } = person;
      return (
        firstName.toLowerCase().includes(query.toLowerCase()) ||
        lastName.toLowerCase().includes(query.toLowerCase()) ||
        userTag.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, sortedEmployees]);

  return sortedAndSearchedEmployees;
};
