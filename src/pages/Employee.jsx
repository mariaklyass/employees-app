// core
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

// utils
import { useEmployeesState } from "../hooks/useEmployeesState";
import { getFormatDate } from "../utils/getFormatDate";

import classes from "./Employee.module.css";

export function Employee() {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);
  const employees = useEmployeesState((state) => state.employees);

  useEffect(() => {
    const user = employees.find((item) => item.id === employeeId);
    if (user) setEmployee(user);
  }, [employeeId, employees]);

  const getAge = () => {
    const currentYear = new Date().getFullYear();
    const dateString = employee?.birthday;
    if (dateString) {
      const bithYear = new Date(dateString).getFullYear();
      const age = currentYear - bithYear;
      return `${age} years`;
    }
  };

  if (!employee) return null;

  return (
    <div className={classes.employee}>
      <header className={classes.header}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon name="shevron-left" />
        </Button>
      </header>
      <div className={classes.wrapper}>
        <Avatar
          className={classes.avatar}
          url={employee.avatarUrl}
          title={`${employee.firstName} ${employee.lastName}`}
        />
        <div className={classes.title}>
          <h1
            className={classes.name}
          >{`${employee.firstName} ${employee.lastName}`}</h1>
          <p className={classes.tag}>{employee.userTag}</p>
        </div>
        <p className={classes.position}>{employee.position}</p>
      </div>
      <main className={classes.main}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <div className={classes.value}>
              <Icon name="star" />
              <p>
                {getFormatDate(employee.birthday, {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </div>
            <div className={classes.aside}>{getAge()}</div>
          </li>
          <li className={classes.item}>
            <div className={classes.value}>
              <Icon name="phone" />
              <p>{employee.phone}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}
