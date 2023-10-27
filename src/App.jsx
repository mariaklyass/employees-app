//createBrowserRouter
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

//Pages
import { Employee } from "./pages/Employee";
import { Employees } from "./pages/Employees";
import { EmployeeList } from "./pages/EmployeeList";
import { CriticalError } from "./components/CriticalError";

//router
const routes = [
  {
    path: "/",
    element: <Employees />,
    errorElement: (
      <CriticalError
        errorType="common"
        onAction={() => <Navigate to="/" replace={true} />}
      />
    ),
    children: [
      { index: true, element: <EmployeeList /> },
      { path: "department/:depId", index: true, element: <EmployeeList /> },
    ],
  },
  {
    path: "employee/:employeeId",
    element: <Employee />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/employees-app",
});

export const App = () => <RouterProvider router={router} />;
