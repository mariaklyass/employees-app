// core
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import { Divider } from "../components/Divider";
import { CriticalError } from "../components/CriticalError";
import { User } from "../components/User";

// data
import { SortOption } from "../data/SortOption";

// utils
import { getSortedEmployees } from "../utils/getSortedEmployees";
import { getDayOfYear } from "../utils/getDayOfYear";

// hooks
import { useEmployeesState } from "../hooks/useEmployeesState";
import { useAppState } from "../hooks/useAppState";

import classes from "./EmployeeList.module.css";

export function EmployeeList() {
  const sortBy = useAppState((state) => state.sortBy);

  const displayedEmployees = useEmployeesState(
    (state) => state.displayedEmployees
  );

  const [currentYearList, setCurrentYearList] = useState([]);
  const [nextYearList, setNextYearList] = useState([]);

  useEffect(() => {
    const sortedEmployees = getSortedEmployees(displayedEmployees);

    if (sortBy === SortOption.Birthday) {
      const currentDay = getDayOfYear(new Date());
      const currentYear = [];
      const nextYear = [];

      sortedEmployees.forEach((employee) => {
        if (getDayOfYear(new Date(employee.birthday)) < currentDay) {
          nextYear.push(employee);
        } else {
          currentYear.push(employee);
        }
      });

      setCurrentYearList(currentYear);
      setNextYearList(nextYear);
    } else {
      setCurrentYearList(sortedEmployees);
      setNextYearList([]);
    }
  }, [displayedEmployees, sortBy]);

  if (displayedEmployees.length === 0)
    return (
      <div className={classes.error}>
        <CriticalError errorType="search" />
      </div>
    );

  return (
    <ul className={classes.list}>
      {currentYearList.map((employee) => (
        <li key={employee.id} className={classes.item}>
          <Link to={`/employee/${employee.id}`}>
            <User user={employee} />
          </Link>
        </li>
      ))}
      {nextYearList.length > 0 && (
        <>
          <li>
            <Divider>
              <p className={classes.divider}>{new Date().getFullYear() + 1}</p>
            </Divider>
          </li>
          {nextYearList.map((employee) => (
            <li key={employee.id} className={classes.item}>
              <Link to={`/employee/${employee.id}`}>
                <User user={employee} />
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
