import { Department } from "../data/departments";
import { getBaseUrl } from "./getBaseUrl";

export const getEmployees = async (dep = "all") => {
  const params = new URLSearchParams();
  // use next line to emulate "500" response error
  // if (Math.random() > 0.8) {
  //   params.append("__code", "500");
  // }

  // params.append("__dynamic", "true");

  if (typeof dep === "string") {
    params.append("__example", dep);
  }

  const { data } = await getBaseUrl.get("/users", {
    params,
  });

  return data.items;
};
