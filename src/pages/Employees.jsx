// core
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

// components
import { CriticalError } from "../components/CriticalError.jsx";
import { Button } from "../components/Button.jsx";
import { Icon } from "../components/Icon.jsx";
import { Modal } from "../components/Modal.jsx";
import { UserSkeleton } from "../components/UserSkeleton.jsx";

// hooks
import { useAppState } from "../hooks/useAppState.js";
import { useEmployeesState } from "../hooks/useEmployeesState.js";

// data
import { SortOption } from "../data/SortOption.js";

// utils
import { getSortedEmployees } from "../utils/getSortedEmployees.js";
import { loadEmployees } from "../utils/loadEmployees.js";
import { filterArray } from "../utils/filterArray.js";

// modules
import { NavigateModule } from "../modules/NavigateModule.jsx";
import { SearchModule } from "../modules/SearchModule.jsx";
import { SortModule } from "../modules/SortModule.jsx";

import classes from "./Employees.module.css";
import clsx from "clsx";

export function Employees() {
  const { depId } = useParams();

  const sortBy = useAppState((s) => s.sortBy);
  const searchString = useAppState((state) => state.search);
  const loadingError = useAppState((state) => state.error);
  const loading = useAppState((state) => state.loading);

  const list = useEmployeesState((state) => state.employees);
  const setDisplayedList = useEmployeesState(
    (state) => state.setDisplayedEmployees
  );

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadEmployees(depId);
  }, [depId]);

  useEffect(() => {
    const filteredEmployees = filterArray(searchString, list, [
      "firstName",
      "lastName",
      "userTag",
    ]);

    setDisplayedList(getSortedEmployees(filteredEmployees));
  }, [searchString, list]);

  return (
    <>
      <header className={classes.header}>
        <h2 className={classes.title}>Search</h2>

        <div className={classes.search}>
          <SearchModule />

          <Button
            className={clsx(classes.button)}
            active={sortBy !== SortOption.Alphabet}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Icon name="list" />
          </Button>
        </div>

        <nav className={classes.nav}>
          <NavigateModule />
        </nav>
      </header>

      <main className={classes.main}>
        {loading ? (
          <ul className={classes.list}>
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <li key={i} className={classes.item}>
                  <UserSkeleton />
                </li>
              ))}
          </ul>
        ) : loadingError ? (
          <div className={classes.error}>
            <CriticalError
              errorType="common"
              onAction={() => {
                loadEmployees(depId);
              }}
            />
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Modal
        opened={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className={classes.modal}>
          <h3 className={classes.modal__heading}>Sorting</h3>
          <SortModule
            onSort={() => {
              setShowModal(false);
            }}
          />
        </div>
      </Modal>
    </>
  );
}
