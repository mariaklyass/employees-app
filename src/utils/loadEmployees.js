import { parseApiError } from "../api/getBaseUrl";
import { getEmployees } from "../api/getEmployees";
import { Department } from "../data/departments";
import { useEmployeesState } from "../hooks/useEmployeesState";
import { useAppState } from "../hooks/useAppState";
import { getSortedEmployees } from "./getSortedEmployees";

export async function loadEmployees(depId = "all") {
  try {
    useAppState.setState({ loading: true });
    const employees = await getEmployees(depId);
    const displayedEmployees = getSortedEmployees(employees);

    useEmployeesState.setState({ employees, displayedEmployees });
    useAppState.setState({ error: null });
  } catch (error) {
    const { message } = parseApiError(error);
    console.error(message);
    useAppState.setState({ error: message });
  } finally {
    useAppState.setState({ loading: false });
  }
}
